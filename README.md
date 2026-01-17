# Lab 2 Mongoose Models and Schemas (Lab 13.2 - Mongoose Models and Schemas)

# Author

Dewan Farhad Mahmud (Rocky)
Software Engineering Trainee - Per Scholas

This project is a RESTful backend API built using Node.js, Express, and MongoDB with Mongoose. It allows librarians to manage a digital book inventory by performing full CRUD operations on book records.

# Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv

# Setup Instructions

- Clone the repository and navigate into the project folder.
- Install dependencies using npm init -y && npm install express mongoose dotenv
- Create a .env file in the root directory and add the following values:
- MONGO_URI=your_mongodb_atlas_connection_string
- PORT=3000

- Start the server using npm run dev
- Once the server is running, you should see confirmation messages in the console indicating a successful database connection and server startup.

# How to Test the API

1. Base URL

- http://localhost:3000/api/books

2. Create a Book (POST)

- Endpoint: POST /api/books

# Request Body Example:

{
"title": "Code Saves Lives",
"author": "Approved by Batman, Superman, and Dewan Mahmud ROCKY",
"isbn": "9780132350884",
"publishedDate": "2025-01-01",
"inStock": true
}

1. Expected Result:

- Returns the created book object with a 201 status code.

2. Get All Books (GET)

- Endpoint: GET /api/books

3. Expected Result:

- Returns an array of all books stored in the database.

4. Get One Book by ID (GET)

- Endpoint: GET /api/books/:id

5. Expected Result:

- Returns the book object if found, or a 404 status if the ID does not exist.

6. Update a Book (PUT)

- Endpoint: PUT /api/books/:id

7. Request Body Example:
   inStock: true/false

8. Expected Result:

- Returns the updated book object.

9. Delete a Book (DELETE)

- Endpoint: DELETE /api/books/:id

10. Expected Result:

- Returns a success message confirming the book was deleted.

# Reflection

Separating the database connection, models, and routes into different directories improves organization and makes the application easier to maintain and scale. This modular structure follows industry best practices and allows each part of the application to focus on a single responsibility.

Using Mongoose schemas helped enforce validation rules and maintain consistent data in the database. Implementing CRUD operations with async/await and try/catch blocks improved error handling and reliability. This lab strengthened my understanding of how backend APIs interact with databases and how RESTful services are structured in real-world applications.
