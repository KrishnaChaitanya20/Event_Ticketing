from flask import Blueprint, request, jsonify
from bson import ObjectId
from database import mongo

userblueprint = Blueprint('userblueprint', __name__)

@userblueprint.route('/', methods=['GET'])
def get_users():
    search_param = request.args.get('search')
    id= request.args.get('id',False)
    start = int(request.args.get('start', 0))
    limit = 20
    if search_param:
        users = mongo.db.users.find({
            '$or': [
                {'name': {'$regex': search_param, '$options': 'i'}}
            ]
        }).skip(start).limit(limit)
    else:
        users = mongo.db.users.find().skip(start).limit(limit)

    user_list = []
    for user in users:
        user_data = {
            'name': user['name'],
            'email': user['email'],
            'events_attended': user['events_attended']
        }
        if id:
            user_data['id'] = str(user['_id'])
        user_list.append(user_data)
    return jsonify({'users': user_list})

@userblueprint.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    user = mongo.db.users.find_one({'email': email, 'password': password})
    if user:
        response = {
            'id': str(user['_id']),
            'name': user['name'],
            'email': user['email'],
            'events_attended': user['events_attended']
        }
        return jsonify(response)
    else:
        return jsonify({'message': 'User not found'})

@userblueprint.route('/addUser', methods=['POST'])
def add_user():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    mongo.db.users.insert_one({
        'name': name,
        'email': email,
        'password': password,
        'events_attended': []
    })
    return jsonify({'message': 'User added successfully'})

@userblueprint.route('/updateUser/<id>', methods=['PUT'])
def update_user(id):
    print("URL Called with id: "+id)
    id=ObjectId(id)
    user = mongo.db.users.find_one({'_id': id})
    if user:
        mongo.db.users.update_one({'_id': id}, {'$set': request.json})
        return jsonify({'message': 'User updated successfully','status':200})
    else:
        return jsonify({'message': 'User not found'})

@userblueprint.route('/deleteUser/<id>', methods=['DELETE'])
def delete_user(id):
    user = mongo.db.users.find_one({'_id': id})
    if user:
        mongo.db.users.delete_one({'_id': id})
        return jsonify({'message': 'User deleted successfully'})
    else:
        return jsonify({'message': 'User not found'})