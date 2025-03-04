# Express.js REST API

This project is a simple RESTful API for managing users and products.

## Setup

1. Clone the repository:
```bash
git clone <reposi>
cd <project_directory>
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file:
```
PORT=3000
```

4. Start the server:
```bash
node index.js
```

## API Endpoints

### Users
- `GET /users`: Retrieve all users
- `GET /users/:id`: Retrieve a single user by ID
- `POST /users`: Create a new user
- `PUT /users/:id`: Update a user by ID
- `DELETE /users/:id`: Delete a user by ID

### Products
- `GET /products`: Retrieve all products
- `GET /products/:id`: Retrieve a single product by ID
- `POST /products`: Create a new product
- `PUT /products/:id`: Update a product by ID
- `DELETE /products/:id`: Delete a product by ID

## Testing

Use Postman or cURL to test the endpoints. For example:

```bash
curl -X GET http://localhost:3000/users
