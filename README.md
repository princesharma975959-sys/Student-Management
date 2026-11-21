# Student Management REST API

A simple REST API built with **Node.js** and **Express.js** to perform CRUD operations on student records. Data is stored in an in-memory JavaScript array; no database is used.

## Setup

```bash
npm install
npm run dev
```

Server: `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get student by ID |
| POST | `/students` | Add a student |
| PUT | `/students/:id` | Update a student |
| DELETE | `/students/:id` | Delete a student |

### Example POST/PUT JSON

```json
{
  "name": "Karan",
  "age": 20,
  "course": "BTech"
}
```

Test the endpoints using Postman. Changes are stored in memory and reset when the server restarts.

## Technologies

- Node.js
- Express.js
- JavaScript
- Postman
