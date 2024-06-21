from flask import Blueprint, request, jsonify
from bson import ObjectId 
from database import mongo

organizerblueprint = Blueprint('organizerblueprint', __name__)

@organizerblueprint.route('/', methods=['GET'])
def get_organizers():
    search_param = request.args.get('search')
    id = request.args.get('id', False)
    start = int(request.args.get('start', 0))
    limit = 20
    if search_param:
        organizers = mongo.db.organizers.find({
            '$or': [
                {'name': {'$regex': search_param, '$options': 'i'}}
            ]
        }).skip(start).limit(limit)
    else:
        organizers = mongo.db.organizers.find().skip(start).limit(limit)

    organizer_list = []
    for organizer in organizers:
        organizer_data = {
            'name': organizer['name'],
            'email': organizer['email'],
            'events_organized': organizer['events_organized']
        }
        if id:
            organizer_data['id'] = str(organizer['_id'])
        organizer_list.append(organizer_data)
    return jsonify({'organizers': organizer_list})


@organizerblueprint.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    organizer = mongo.db.organizers.find_one({'email': email, 'password': password})
    if organizer:
        response = {
            'id': str(organizer['_id']),
            'name': organizer['name'],
            'email': organizer['email'],
            'events_organized': organizer['events_organized']
        }
        return jsonify({"data": response, "status": 200})
    else:
        return jsonify({'message': 'Organizer not found', 'status': 404})


@organizerblueprint.route('/addOrganizer', methods=['POST'])
def add_organizer():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    mongo.db.organizers.insert_one({
        'name': name,
        'email': email,
        'password': password,
        'events_organized': []
    })
    return jsonify({'message': 'Organizer added successfully'})


@organizerblueprint.route('/updateOrganizer/<id>', methods=['PUT'])
def update_organizer(id):
    print("URL Called with id: " + id)
    id = ObjectId(id)
    organizer = mongo.db.organizers.find_one({'_id': id})
    if organizer:
        mongo.db.organizers.update_one({'_id': id}, {'$set': request.json})
        return jsonify({'message': 'Organizer updated successfully', 'status': 200})
    else:
        return jsonify({'message': 'Organizer not found'})


@organizerblueprint.route('/deleteOrganizer/<id>', methods=['DELETE'])
def delete_organizer(id):
    organizer = mongo.db.organizers.find_one({'_id': id})
    if organizer:
        mongo.db.organizers.delete_one({'_id': id})
        return jsonify({'message': 'Organizer deleted successfully'})
    else:
        return jsonify({'message': 'Organizer not found'})