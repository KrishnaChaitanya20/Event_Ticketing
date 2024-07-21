# Event Ticketing

This project is an event booking website built with Python for the frontend, Flask for the backend, and MongoDB for the database. The backend code can be found in the `Backend` folder, while the frontend code is located in the `Frontend` folder.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/SAI-RATHAN/Event_Ticketing.git
    ```

2. Set up the MongoDB database:

    - Install MongoDB and start the MongoDB service.
    - Create a new database named `event_ticketing`.
    - In `Backend` folder rename `.env.example` to `.env`
    - Update the database connection details in the `.env` file.
    - In `Frontend` folder rename `.env.example` to `.env`
    - Update the backend connection details in the `.env` file.
    ## Usage

    ### Part 1: Starting the backend server

    1. Open a terminal and navigate to the `Backend` folder:

        ```bash
        cd Backend
        ```

    2. Install the required dependencies:

        ```bash
        pip install -r requirements.txt
        ```

    3. Start the backend server:

        ```bash
        python backend.py
        ```

    ### Part 2: Starting the frontend server

    1. Open another terminal and navigate to the `Frontend` folder:

        ```bash
        cd Frontend
        ```

    2. Install the required dependencies:

        ```bash
        npm ci
        ```

    3. Start the frontend server:

        ```bash
        npm start
        ```

3. Access the website in your browser at `http://localhost:5000`.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request.