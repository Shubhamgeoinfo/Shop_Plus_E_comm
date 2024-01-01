Full Stack MERN E-commerce Shop Plus Application

Welcome to the Full Stack MERN E-commerce Shop Plus Application. This application is designed to provide a comprehensive e-commerce experience with user and admin functionalities, authentication using JWT, product selection, payment processing, and more. Below, you'll find a detailed guide on how to set up, use, and customize this powerful application.

Table of Contents

1. Introduction
2. Features
3. Technologies Used
4. Getting Started
5. Application Structure
6. Configuration
7. Authentication
8. User Guide
9. Admin Guide
10. Dependencies
11. Contributing
12. License

 Introduction

The Full Stack MERN E-commerce Shop Plus Application is a feature-rich platform that allows users to browse products, add them to their cart, make payments, and track their orders. Admins have access to an intuitive interface for managing products and categories. The application is built with a MERN stack, utilizing React for the front end, Express for the backend, and MongoDB for data storage.

 Features

* User Authentication: Secure user and admin authentication using JWT.
* Product Management: Admins can create and manage product listings.
* Category Creation: Admins can create and manage product categories.
* Product Filtering: Users can filter products based on category and price.
* Order Tracking: Users can track the status of their orders.
* Payment Processing: Seamless integration for secure payment transactions.

Technologies Used

* Front End: React
* Back End: Express.js
* Database:  MongoDB
* Authentication: JSON Web Tokens (JWT)
* Payment: Payment Gateway of Choice

Getting Started

1. Clone the repository.
2. Install dependencies using `npm install` or ` npm i ` in both the client and server directories.
3. Configure the application (see [Configuration]).
4. Run the server using `npm start` in the server directory.
5. Run the client using `npm start` in the client directory.
6. Run the client using `npm run dev` in the root directory to run the application.
7. Access the application at `http://localhost:3000`.

Application Structure

* Client: React application for the front end.
* Server: Express.js server for the back end.
* Database: MongoDB for data storage.

Configuration

* Server:  Configure the MongoDB connection string and JWT secret in the server's `.env` file.

1. PORT = 8080
2. DEV_MODE = Development
3. MONGO_URL = mongodb+srv://shubhamgeoinfo:Password@cluster0.9tw8rlp.mongodb.net/e_comm
4. JWT_SECRET = 
5. BRAINTREE_MERCHANT_ID = 
6. BRAINTREE_PUBLIC_KEY = 
7. BRAINTREE_PRIVATE_KEY = 

* Client:  Configure any API endpoints in the client's configuration files `.env` file.

1. REACT_APP_API = http://localhost:8080

Authentication

User and admin authentication is handled using JWT. Tokens are generated upon successful login and used for subsequent requests.
User Guide

1. Login/Signup:  Users can create an account or log in.
2. Product Selection: Browse products, filter by category or price, and add to the cart.
3. Payment:  Proceed to checkout, enter payment details, and complete the transaction.
4. Order Tracking:  Users can track their orders in the user dashboard.

Admin Guide

1. Login: Admins can log in using their credentials.
2. Category Management: Create, edit, and delete product categories.
3. Product Management: Add, edit, and delete products.
4. Order Management: View and manage customer orders.

Dependencies

This application utilizes various NPM packages, including but not limited to:

* `express`
* `mongoose`
* `react`
* `jsonwebtoken`
Contributing

Feel free to contribute to the development of this project! Fork the repository, make your changes, and submit a pull request.

License

This application is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as needed.
