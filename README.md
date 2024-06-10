# Real Estate Backend Project

Welcome to the Real Estate Backend Project, an educational project developed by Lamadev. This project is a full-stack application where users can create accounts, log in, create posts, update data, create chat rooms, and send real-time messages. The backend is built with Express and MongoDB, and it demonstrates key features commonly found in real estate web applications.

## Table of Contents

- Features
- Technologies Uesd
- Usage
- API Endpoints
- Acknowlegement

### Features
- User authentication and authorization (sign up, log in, log out)
- Create, read, update, and delete posts
- Real-time chat functionality
- Real-time messaging
- Data storage using MongoDB

### Technologies Used
- Node.js
- Express
- MongoDB
- Prisma for MongoDB object modelling
- JWT for authentication
- Socket.io for real-time communication

### Usage
- Sign Up/Login: Users can sign up for a new account or log in with existing credentials.
- Create Post: Logged-in users can create new real estate posts.
- Update/Delete Post: Users can update or delete their posts.
- Real-Time Chat: Users can create chat rooms and send messages in real-time.

### API Endpoints
Here are some of the main API endpoints:

#### Auth:

- "POST /api/v1/auth/register" - Register a new user
- "POST /api/v1/auth/login" - Login a user
- "POST /api/v1/auth/logout" - Logout a user

#### Posts:

- "GET /api/v1/posts" - Get all posts
- "GET /api/v1/posts/:id" - Get a specific post
- "POST /api/v1/posts" - Create a new post
- "PUT /api/v1/posts/:id" - Update a post
- "DELETE /api/v1/posts/:id" - Delete a post

#### Chats:

- "POST /api/v1/chats" - Create a new chat
- "GET /api/v1/chats/:chatId" - Get single chat
- "GET /api/v1/chats" - Get all chat
- "POST /api/v1/chats/:chatId" - Send a message in a chat ***etc***

### Acknowledgments
Special thanks to Lamadev for providing the educational content and inspiration for this project. Cant wait to integrate the knowledge i learnt in this project into many others i am going to create
