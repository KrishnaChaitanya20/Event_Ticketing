import base64
from flask import Blueprint, request, jsonify
from database import mongo
from bson.objectid import ObjectId
import os

eventblueprint = Blueprint('eventblueprint', __name__)

############################################################################################################

@eventblueprint.route('/', methods=['GET'])
def get_events():
    search_param = request.args.get('search')
    category = request.args.get('category')
    start = int(request.args.get('start', 0))
    limit = int(request.args.get('limit', 10))
    if category:
        events = mongo.db.events.find({
            'category': {'$regex': category, '$options': 'i'}
        }).skip(start).limit(limit)
    elif search_param:
        events = mongo.db.events.find({
            '$or': [
                {'name': {'$regex': search_param, '$options': 'i'}},
                {'description': {'$regex': search_param, '$options': 'i'}}
            ]
        }).skip(start).limit(limit)
    else:
        events = mongo.db.events.find().skip(start).limit(limit)

    event_list = []
    for event in events:
        if 'image' not in event:
            event['image'] = 'default'
        img = base64.b64encode(open('Images/'+event['image'], 'rb').read()).decode('utf-8')
        event_data = {
            'id': str(event['_id']),
            'name': event['name'],
            'date': event['date'],
            'image': img,
            'image_ext': event['image'].split('.')[-1],
            'location': event['location'],
            'entry_fee': event['entry_fee'],
            'description': event['description'],
            'organizer': event['organizer'],
            'capacity': event['capacity']
        }
        event_list.append(event_data)
    return jsonify({'events': event_list})
    
############################################################################################################

@eventblueprint.route('/upcomming', methods=['GET'])
def get_upcomming_events():
    events = mongo.db.events.find().sort('date', 1).limit(3)
    event_list = []
    for event in events:
        if 'image' not in event:
            event['image'] = 'default'
        img = base64.b64encode(open('Images/'+event['image'], 'rb').read()).decode('utf-8')
        event_data = {
            'id': str(event['_id']),
            'name': event['name'],
            'date': event['date'],
            'image': img,
            'image_ext': event['image'].split('.')[-1],
            'location': event['location'],
            'entry_fee': event['entry_fee'],
            'description': event['description'],
            'organizer': event['organizer'],
            'capacity': event['capacity']
        }
        event_list.append(event_data)
    return jsonify({'events': event_list})

############################################################################################################

@eventblueprint.route('/find/<id>', methods=['GET'])
def find_event(id):
    event = mongo.db.events.find_one({'_id': ObjectId(id)})
    if event:
        if 'image' not in event:
            event['image'] = 'default'
        img = base64.b64encode(open('Images/'+event['image'], 'rb').read()).decode('utf-8')
        response = {
            'id': str(event['_id']),
            'name': event['name'],
            'date': event['date'],
            'image':img,
            'image_ext': event['image'].split('.')[-1],
            'location': event['location'],
            'entry_fee': event['entry_fee'],
            'description': event['description'],
            'organizer': event['organizer'],
            'capacity': event['capacity']
        }
        return jsonify(response)
    else:
        return jsonify({'message': 'Event not found'})
    
############################################################################################################

def secure_filename(filename):
    uuid=str(ObjectId())
    filename=uuid+"-"+filename.replace(" ","_")
    print("filename",filename)
    return filename



@eventblueprint.route('/addEvent', methods=['POST'])
def add_event():
    print("called add event")
    img = request.files.get('eventImage')
    if img:
        filename = secure_filename(img.filename)
        directory = 'Images/'
        if not os.path.exists(directory):
            os.makedirs(directory)
        img.save(directory + filename)
        print("image saved")

        event_name = request.form.get('eventName')
        event_description = request.form.get('eventDescription')
        event_category = request.form.get('eventCategory')
        event_date = request.form.get('eventDate')
        capacity = request.form.get('capacity')
        entry_fee = request.form.get('entry_fee')
        venue_name = request.form.get('venueName')
        venue_address = request.form.get('venueAddress')
        organizer_name = request.form.get('organizerName')
        organizer_contact = request.form.get('organizerContact')

        if not all([event_name, event_description, event_category, event_date, capacity, entry_fee, venue_name, venue_address, organizer_name, organizer_contact]):
            return jsonify({'message': 'Missing data', 'status': 400}), 400

        event_data = {
            'name': event_name,
            'description': event_description,
            'category': event_category,
            'date': event_date,
            'image': filename,
            'capacity': int(capacity),
            'entry_fee': int(entry_fee),
            'location': {
                'venueName': venue_name,
                'venueAddress': venue_address
            },
            'organizer': {
                'name': organizer_name,
                'email': organizer_contact
            }
        }

        mongo.db.events.insert_one(event_data)
        return jsonify({'message': 'Event added successfully', 'status': 200})
    else:
        return jsonify({'message': 'No image provided', 'status': 400}), 400

############################################################################################################

@eventblueprint.route('/updateEvent/<id>', methods=['PUT'])
def update_event(id):
    event = mongo.db.events.find_one({'_id': id})
    if event:
        mongo.db.events.update_one({'_id': id}, {'$set': request.json})
        return jsonify({'message': 'Event updated successfully'})
    else:
        return jsonify({'message': 'Event not found'})
    
    
@eventblueprint.route('/deleteEvent/<id>', methods=['DELETE'])
def delete_event(id):
    event = mongo.db.events.find_one({'_id': id})
    if event:
        mongo.db.events.delete_one({'_id': id})
        return jsonify({'message': 'Event deleted successfully'})
    else:
        return jsonify({'message': 'Event not found'})

############################################################################################################

@eventblueprint.route('/delete', methods=['GET'])
def delete_all():
    mongo.db.events.delete_many({})
    return jsonify({'message': 'All events deleted successfully'})
    