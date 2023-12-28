# Simple Node.js Express Backend Project 🚀

This is a simple backend project built using Node.js, Express, and MySQL. This project provides a straightforward example of a backend application, demonstrating the use of popular technologies to handle HTTP requests, interact with a MySQL database, and serve as a foundation for more complex applications.

# Technologies Used

**Node.js**: The project is built on the Node.js runtime, providing a server-side JavaScript environment.

**Express**: A fast, unopinionated, minimalist web framework for Node.js, used to build robust and scalable APIs.

**MySQL**: The MySQL database is employed to store and retrieve data for the application.

# Project Structure

The project follows a modular structure to enhance organization and maintainability:

**controllers/**: Manages HTTP request handling and response logic.

**middleware/**: Holds middleware components for request processing.

**routes/**: Defines API routes and their respective controller actions.

**database/**: Involves modules related to database interactions.
 
 RUN
--------

**Start backend**
1. `npm run dev`

Server running on port: http://localhost:5001

**ROUTES**

1.GET   /api/contacts

  Get all contacts
  

2.POST  /api/contacts

  Create new contacts
  

3.GET  /api/contacts/:id

  Get a contact using the id
  

4.PUT  /api/contacts/:id

  Update a contact using the id number
  

5.DELETE  /api/contacts/:id

  Delete a contact using the id
