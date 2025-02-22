from flask import Flask, jsonify
from database import mongo
from EventService.eventblueprint import eventblueprint
from BookingService.bookingblueprint import bookingblueprint
from UserService.userblueprint import userblueprint
from OrganizerService.organizerblueprint import organizerblueprint
from flask_cors import CORS

import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"]=os.environ.get('MONGO_URI')
mongo.init_app(app)

# Register blueprints here
app.register_blueprint(eventblueprint, url_prefix='/api/events')
app.register_blueprint(bookingblueprint, url_prefix='/api/bookings')
app.register_blueprint(userblueprint, url_prefix='/api/users')
app.register_blueprint(organizerblueprint, url_prefix='/api/organizers')

@app.route('/api/ping', methods=['GET'])
def ping():
    return jsonify({'response': 'pong!'})

if __name__ == '__main__':
    print(os.environ.get('MONGO_URI'))
    app.run(debug=True, host='0.0.0.0', port=5000)