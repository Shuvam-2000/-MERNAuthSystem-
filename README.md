# MERN Authentication System

## Overview
A comprehensive MERN stack project that implements user authentication and product showcasing. The application ensures secure user interactions through JWT-based authentication and provides a private route for protected content access.

## Features

### Authentication
- **Sign Up**: Allows users to create an account with front-end and server-side validations.
- **Login**: Enables users to log in with front-end and server-side validations.
- **JWT Authentication**: Secure authentication mechanism using JSON Web Tokens.

### Product Showcase
- **Product Route**: Backend endpoint to fetch product data.
- **Frontend Display**: Products are showcased on the home page.

### Protected Routes
- **Home Route**: Access restricted to authenticated users using a private route implementation.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Shuvam-2000/-MERNAuthSystem-.git
   cd -MERNAuthSystem-
   ```

2. **Install Dependencies**
   - Backend:
     ```bash
     cd Backend
     npm install
     ```
   - Frontend:
     ```bash
     cd Frontend
     cd auth-mern-app
     npm install
     ```

3. **Set Environment Variables**
   Create a `.env` file in the `Backend` directory with the following variables:
   ```env
   PORT=8080
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the Application**
   - Start the backend server:
     ```bash
     cd Backend
     npm run start
     ```
   - Start the frontend:
     ```bash
     cd Frontend
     cd auth-mern-app
     npm start
     ```

## Endpoints

### Authentication Endpoints
- **POST /api/auth/signup**: User signup
- **POST /api/auth/login**: User login

### Product Endpoints
- **GET /api/products**: Fetch product list

## Usage
1. **Sign Up**: Create a new user account.
2. **Login**: Log in with valid credentials.
3. **Access Protected Route**: Once logged in, navigate to the home page to view products.

