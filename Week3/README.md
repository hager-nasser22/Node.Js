# Node.js MySQL User API

A simple Express.js REST API for managing users with MySQL.

## Features

- Get all users
- Get user by ID
- Search users by name
- Add user
- Update user
- Delete user

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Configure your MySQL database in `index.js`.
4. Start the server:
   ```
   node index.js
   ```
5. API runs on `http://localhost:3000`.

## Endpoints

- `GET /users`
- `GET /users/:id`
- `GET /user/search/:key`
- `POST /addUser`
- `PATCH /updateUser/:id`
- `DELETE /deleteUser/:id`