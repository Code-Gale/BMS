# Booking Management System API Documentation

## Introduction

The Booking Management System API provides a RESTful system for managing bookings, customers, and properties. This API allows you to perform CRUD (Create, Read, Update, Delete) operations on these entities, used to manage the booking management system.

## Endpoints

### Bookings

#### Get All Bookings
- **Endpoint:** `GET /bookings`
- **Description:** Retrieve a list of all bookings.
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    [
      {
        "id": "61f8b2a1234567890abcdef1",
        "customer": {
          "id": "61f8b2a1234567890abcdef2",
          "name": "John Doe",
          "email": "john.doe@example.com",
          "phone": "1234567890"
        },
        "property": {
          "id": "61f8b2a1234567890abcdef3",
          "name": "Cozy Apartment",
          "description": "A charming apartment in the city center.",
          "price": 100,
          "location": "123 Main St, Anytown USA"
        },
        "startDate": "2023-02-01T00:00:00.000Z",
        "endDate": "2023-02-08T00:00:00.000Z",
        "totalPrice": 700
      },
      {
        "id": "61f8b2a1234567890abcdef4",
        "customer": {
          "id": "61f8b2a1234567890abcdef5",
          "name": "Jane Smith",
          "email": "jane.smith@example.com",
          "phone": "0987654321"
        },
        "property": {
          "id": "61f8b2a1234567890abcdef6",
          "name": "Beach House",
          "description": "A beautiful beach-front property.",
          "price": 200,
          "location": "456 Ocean Blvd, Beachtown USA"
        },
        "startDate": "2023-06-15T00:00:00.000Z",
        "endDate": "2023-06-22T00:00:00.000Z",
        "totalPrice": 1400
      }
    ]
    ```

#### Get a Booking by ID
- **Endpoint:** `GET /bookings/:id`
- **Description:** Retrieve a specific booking by its ID.
- **Parameters:**
  - `id`: The ID of the booking to retrieve.
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    {
      "id": "61f8b2a1234567890abcdef1",
      "customer": {
        "id": "61f8b2a1234567890abcdef2",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "1234567890"
      },
      "property": {
        "id": "61f8b2a1234567890abcdef3",
        "name": "Cozy Apartment",
        "description": "A charming apartment in the city center.",
        "price": 100,
        "location": "123 Main St, Anytown USA"
      },
      "startDate": "2023-02-01T00:00:00.000Z",
      "endDate": "2023-02-08T00:00:00.000Z",
      "totalPrice": 700
    }
    ```

#### Create a Booking
- **Endpoint:** `POST /bookings`
- **Description:** Create a new booking.
- **Request Body:**
  ```json
  {
    "customer": "61f8b2a1234567890abcdef2",
    "property": "61f8b2a1234567890abcdef3",
    "startDate": "2023-02-01",
    "endDate": "2023-02-08",
    "totalPrice": 700
  }
  ```
- **Response:**
  - **Status Code:** 201 Created
  - **Body:**
    ```json
    {
      "id": "61f8b2a1234567890abcdef7",
      "customer": "61f8b2a1234567890abcdef2",
      "property": "61f8b2a1234567890abcdef3",
      "startDate": "2023-02-01T00:00:00.000Z",
      "endDate": "2023-02-08T00:00:00.000Z",
      "totalPrice": 700
    }
    ```

#### Update a Booking
- **Endpoint:** `PUT /bookings/:id`
- **Description:** Update an existing booking.
- **Parameters:**
  - `id`: The ID of the booking to update.
- **Request Body:**
  ```json
  {
    "customer": "61f8b2a1234567890abcdef5",
    "property": "61f8b2a1234567890abcdef6",
    "startDate": "2023-06-15",
    "endDate": "2023-06-22",
    "totalPrice": 1400
  }
  ```
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    {
      "id": "61f8b2a1234567890abcdef7",
      "customer": "61f8b2a1234567890abcdef5",
      "property": "61f8b2a1234567890abcdef6",
      "startDate": "2023-06-15T00:00:00.000Z",
      "endDate": "2023-06-22T00:00:00.000Z",
      "totalPrice": 1400
    }
    ```

#### Delete a Booking
- **Endpoint:** `DELETE /bookings/:id`
- **Description:** Delete a specific booking.
- **Parameters:**
  - `id`: The ID of the booking to delete.
- **Response:**
  - **Status Code:** 204 No Content

### Customers

#### Get All Customers
- **Endpoint:** `GET /customers`
- **Description:** Retrieve a list of all customers.
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    [
      {
        "id": "61f8b2a1234567890abcdef2",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "1234567890"
      },
      {
        "id": "61f8b2a1234567890abcdef5",
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "phone": "0987654321"
      }
    ]
    ```

#### Get a Customer by ID
- **Endpoint:** `GET /customers/:id`
- **Description:** Retrieve a specific customer by their ID.
- **Parameters:**
  - `id`: The ID of the customer to retrieve.
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    {
      "id": "61f8b2a1234567890abcdef2",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "1234567890"
    }
    ```

#### Create a Customer
- **Endpoint:** `POST /customers`
- **Description:** Create a new customer.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890"
  }
  ```
- **Response:**
  - **Status Code:** 201 Created
  - **Body:**
    ```json
    {
      "id": "61f8b2a1234567890abcdef8",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "1234567890"
    }
    ```

#### Update a Customer
- **Endpoint:** `PUT /customers/:id`
- **Description:** Update an existing customer.
- **Parameters:**
  - `id`: The ID of the customer to update.
- **Request Body:**
  ```json
  {
    "name": "John Doe Jr.",
    "email": "john.doe.jr@example.com",
    "phone": "0987654321"
  }
  ```
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    {
      "id": "61f8b2a1234567890abcdef8",
      "name": "John Doe Jr.",
      "email": "john.doe.jr@example.com",
      "phone": "0987654321"
    }
    ```

#### Delete a Customer
- **Endpoint:** `DELETE /customers/:id`
- **Description:** Delete a specific customer.
- **Parameters:**
  - `id`: The ID of the customer to delete.
- **Response:**
  - **Status Code:** 204 No Content

### Properties

#### Get All Properties
- **Endpoint:** `GET /properties`
- **Description:** Retrieve a list of all properties.
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    [
      {
        "id": "61f8b2a1234567890abcdef3",
        "name": "Cozy Apartment",
        "description": "A charming apartment in the city center.",
        "price": 100,
        "location": "123 Main St, Anytown USA"
      },
      {
        "id": "61f8b2a1234567890abcdef6",
        "name": "Beach House",
        "description": "A beautiful beach-front property.",
        "price": 200,
        "location": "456 Ocean Blvd, Beachtown USA"
      }
    ]
    ```

#### Get a Property by ID
- **Endpoint:** `GET /properties/:id`
- **Description:** Retrieve a specific property by its ID.
- **Parameters:**
  - `id`: The ID of the property to retrieve.
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    {
      "id": "61f8b2a1234567890abcdef3",
      "name": "Cozy Apartment",
      "description": "A charming apartment in the city center.",
      "price": 100,
      "location": "123 Main St, Anytown USA"
    }
    ```

#### Create a Property
- **Endpoint:** `POST /properties`
- **Description:** Create a new property.
- **Request Body:**
  ```json
  {
    "name": "Luxury Villa",
    "description": "A spacious villa with a pool and stunning views.",
    "price": 300,
    "location": "789 Hillside Rd, Mountaintown USA"
  }
  ```
- **Response:**
  - **Status Code:** 201 Created
  - **Body:**
    ```json
    {
      "id": "61f8b2a1234567890abcdef9",
      "name": "Luxury Villa",
      "description": "A spacious villa with a pool and stunning views.",
      "price": 300,
      "location": "789 Hillside Rd, Mountaintown USA"
    }
    ```

#### Update a Property
- **Endpoint:** `PUT /properties/:id`
- **Description:** Update an existing property.
- **Parameters:**
  - `id`: The ID of the property to update.
- **Request Body:**
  ```json
  {
    "name": "Luxury Villa - Updated",
    "description": "A spacious villa with a pool, hot tub, and amazing views.",
    "price": 350,
    "location": "789 Hillside Rd, Mountaintown USA"
  }
  ```
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    {
      "id": "61f8b2a1234567890abcdef9",
      "name": "Luxury Villa - Updated",
      "description": "A spacious villa with a pool, hot tub, and amazing views.",
      "price": 350,
      "location": "789 Hillside Rd, Mountaintown USA"
    }
    ```

#### Delete a Property
- **Endpoint:** `DELETE /properties/:id`
- **Description:** Delete a specific property.
- **Parameters:**
  - `id`: The ID of the property to delete.
- **Response:**
  - **Status Code:** 204 No Content

## Error Handling

If an error occurs while processing a request, the API will respond with an appropriate HTTP status code and a JSON object containing an error message. For example:

```json
{
  "message": "Booking not found"
}
```

The possible error responses include:

- `400 Bad Request`: Invalid request body or parameters.
- `404 Not Found`: The requested resource (booking, customer, or property) was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.

## Setup Guide

To set up the Booking Management System API, follow these steps:

1. **Prerequisites**:
   - Node.js (version 12 or higher)
   - MongoDB (version 4.2 or higher)

2. **Installation**:
   - Clone the repository: `git clone https://github.com/Code-Gale/bms.git`
   - Navigate to the project directory: `cd bms`
   - Install the dependencies: `npm install`

3. **Configuration**:
   - Create a `.env` file in the project root directory.
   - Add the following environment variables to the `.env` file:
     ```
     MONGODB_URI=mongodb://localhost:27017/booking-management-system
     PORT=5000
     ```

4. **Running the API**:
   - Start the server: `npm start`
   - The API will be running at `http://localhost:5000`

5. **Running the Tests**:
   - Run the tests: `npm test`
