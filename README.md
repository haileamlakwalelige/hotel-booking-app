# Express.js Hotel Booking API

## Description
This is a RESTful API built with **Express.js** and **MongoDB** for managing hotel bookings. The API includes authentication, hotel, room, and user management.

## Features
- **User Authentication** (Sign-up, Login, JWT authentication)
- **Hotel Management** (Create, Read, Update, Delete hotels)
- **Room Management** (Add rooms to hotels, CRUD operations)
- **User Management** (Retrieve and manage user data)
- **Error Handling** (Middleware for structured error responses)
- **Cookie-based Authentication**

## Technologies Used
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv
- cookie-parser

## Installation
### Prerequisites
- Node.js installed
- MongoDB installed and running
- `.env` file configured with `MONGO_URL`

### Steps to Run
1. Clone the repository:
   ```sh
   git clone https://github.com/haileamlakwalelige/hotel-booking-app/
   cd hotel-booking-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file and add:
   ```env
   MONGO_URL=your_mongodb_connection_string
   ```
4. Start the server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:8800`

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Hotels
- `GET /api/hotels` - Get all hotels
- `POST /api/hotels` - Create a new hotel
- `GET /api/hotels/:id` - Get a specific hotel
- `PUT /api/hotels/:id` - Update hotel details
- `DELETE /api/hotels/:id` - Delete a hotel

### Rooms
- `GET /api/rooms` - Get all rooms
- `POST /api/rooms` - Create a new room
- `GET /api/rooms/:id` - Get a specific room
- `PUT /api/rooms/:id` - Update room details
- `DELETE /api/rooms/:id` - Delete a room

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user details
- `PUT /api/users/:id` - Update user info
- `DELETE /api/users/:id` - Delete user

## Error Handling
Errors are handled globally with meaningful responses:
```json
{
  "success": false,
  "status": 500,
  "message": "Something is wrong!",
  "stack": "Error details..."
}
```

## License
This project is licensed under the MIT License.

