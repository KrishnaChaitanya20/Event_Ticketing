from flask import Blueprint, request, jsonify
from database import mongo

eventblueprint = Blueprint('eventblueprint', __name__)

@eventblueprint.route('/', methods=['GET'])
def get_events():
    events = mongo.db.events.find({},{"_id": 0})
    event_list = [event for event in events]
    return jsonify({'events': event_list})
    

@eventblueprint.route('/<name>', methods=['GET'])
def get_event(name):
    event = mongo.db.events.find_one({'name': name})
    if event:
        response = {
            'name': event['name'],
            'date': event['date'],
            'location': event['location'],
            'entry_fee': event['entry_fee'],
            'description': event['description'],
            'organizer': event['organizer'],
            'capacity': event['capacity']
        }
        return jsonify(response)
    else:
        return jsonify({'message': 'Event not found'})
    

@eventblueprint.route('/addEvent', methods=['POST'])
def add_event():
    name = request.json['name']
    date = request.json['date']
    location = request.json['location']
    entry_fee = request.json['entry_fee']
    description = request.json['description']
    organizer = request.json['organizer']
    capacity = request.json['capacity']
    mongo.db.events.insert_one({
        'name': name,
        'date': date,
        'location': location,
        'entry_fee': entry_fee,
        'description': description,
        'organizer': organizer,
        'capacity': capacity
    })
    return jsonify({'message': 'Event added successfully'})

