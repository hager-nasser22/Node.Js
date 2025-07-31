# Saraha Messaging System

A full-stack web application that allows users to register, verify their email, log in, and exchange anonymous messages. The system supports secure authentication, email verification, and CRUD operations for users and messages.

## Features

- User registration with email verification.
- Secure login and JWT-based authentication.
- Send and receive anonymous messages.
- Full CRUD operations for users and messages.
- Error handling and validation.
- Email notifications using Nodemailer.

## Technologies

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- Nodemailer
- bcrypt
- dotenv

## Getting Started

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with your environment variables (DB connection, email credentials, JWT secrets, etc.).
4. Run `npm start` to launch the server.

## Folder Structure

- `/database` - MongoDB models and connection.
- `/src/modules/users` - User routes and controllers.
- `/src/modules/messages` - Message routes and controllers.
- `/src/modules/email` - Email sending and templates.
- `/src/utils` - Error handling utilities.
- `/src/middleware` - Authentication and async error handling.

