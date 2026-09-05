# Backend Full Course

My hands-on journey learning backend development with Node.js and the technologies around it.

This repository documents my progress chapter by chapter, including what I learn, what I build, the problems I face, and how I solve them.

The goal is not only to follow the course, but to understand the concepts, solve problems independently, and develop real software engineering habits.

---

# Chapter 3 — Todo REST API

## 📌 Overview

In Chapter 3, I built a backend Todo application using Node.js and Express.

The application includes user registration, login, JWT authentication, protected Todo routes, password hashing, and a SQLite database.

This chapter also helped me understand how different parts of a backend application work together:

**HTTP Request → Express → Middleware → Route → Database → Response**

---

## 🛠️ Technologies

* Node.js
* Express.js
* SQLite
* `node:sqlite`
* JWT
* bcryptjs
* REST API
* JavaScript ES Modules
* HTTP methods
* Environment Variables

---

## ✨ Features

### Authentication

* User registration
* Password hashing with bcrypt
* User login
* JWT token generation
* Protected routes
* JWT token verification

### Todo API

* Get user todos
* Create a todo
* Update a todo
* Delete a todo

Each Todo is associated with a specific user.

---

## 📂 Project Structure

```text
chapter_3/
│
├── public/
│   ├── index.html
│   ├── fanta.css
│   └── styles.css
│
├── src/
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── todoRoutes.js
│   │
│   ├── db.js
│   └── server.js
│
├── .env.example
├── .gitignore
├── package.json
├── todo-app.rest
└── README.md
```

---

# 🔐 Authentication Flow

### Register

```text
Client
  ↓
POST /auth/register
  ↓
Validate credentials
  ↓
Hash password with bcrypt
  ↓
Save user in database
  ↓
Create JWT
  ↓
Return token
```

### Login

```text
Client
  ↓
POST /auth/login
  ↓
Find user
  ↓
Compare password
  ↓
Create JWT
  ↓
Return token
```

### Protected Todo Routes

```text
Client
  ↓
Authorization Header
  ↓
Authentication Middleware
  ↓
Verify JWT
  ↓
Extract user ID
  ↓
Todo Route
  ↓
Database
```

---

# 📡 API Endpoints

| Method | Endpoint         | Authentication | Description         |
| ------ | ---------------- | -------------- | ------------------- |
| GET    | `/`              | No             | Serve the frontend  |
| POST   | `/auth/register` | No             | Register a new user |
| POST   | `/auth/login`    | No             | Login               |
| GET    | `/todos`         | Yes            | Get user's todos    |
| POST   | `/todos`         | Yes            | Create a todo       |
| PUT    | `/todos/:id`     | Yes            | Update a todo       |
| DELETE | `/todos/:id`     | Yes            | Delete a todo       |

API requests can be tested using the `todo-app.rest` file.

---

# ⚙️ Environment Variables

Create a `.env` file:

```env
JWT_SECRET=your_jwt_secret_here
PORT=5000
```

The `.env` file is intentionally excluded from Git.

A `.env.example` file is provided to show the required variables.

---

# ▶️ Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run on:

```text
http://localhost:5000
```

---

# 📚 What I Learned

During this chapter, I learned and practiced:

* Express.js server setup
* Middleware
* Routing
* REST API design
* HTTP methods
* Request and response handling
* Password hashing
* JWT authentication
* Authentication middleware
* SQLite databases
* SQL queries
* Foreign keys
* Environment variables
* ES Modules
* Static files
* Node.js development tools

---

# 🧠 Challenges & Solutions

## 1. NVM Installation

While setting up the development environment, I encountered an issue with the installation method used in the course.

Instead of simply copying another solution, I researched:

* What NVM is
* Why Node.js version management is useful
* How NVM works on Windows
* Why the original approach didn't work in my environment
* What alternative solutions were available

I then implemented an alternative solution and verified the environment.

```bash
nvm -v
nvm list
node -v
```

### Lesson

A tutorial provides one possible path.

Real-world development requires understanding the problem and finding an appropriate solution when that path doesn't work.

---

## 2. Node.js `--watch` vs Nodemon

I investigated why the project uses:

```bash
node --watch
```

instead of Nodemon.

Nodemon is an external package that must be installed as a project dependency.

Modern Node.js provides a built-in `--watch` option, which can restart the application when files change without requiring an additional dependency.

This helped me understand the difference between:

* Built-in Node.js features
* Third-party development tools
* Project dependencies

---

## 3. Loading Environment Variables

I also investigated:

```bash
--env-file=.env
```

Traditionally, projects commonly used the `dotenv` package to load environment variables from a `.env` file.

Recent Node.js versions provide built-in support for loading environment variables using `--env-file`.

This means an additional dependency is not required for this specific purpose.

---

## 4. ES Modules

I added:

```json
"type": "module"
```

to `package.json`.

This tells Node.js to treat `.js` files as ES Modules, allowing syntax such as:

```js
import express from 'express';
```

instead of the CommonJS style:

```js
const express = require('express');
```

---

## 5. Authorization and User Ownership

While reviewing the Todo API, I identified an important authorization issue.

A Todo update should not only depend on the Todo ID.

The query should also verify that the Todo belongs to the authenticated user.

For example:

```sql
UPDATE todos
SET completed = ?
WHERE id = ? AND user_id = ?
```

This prevents one authenticated user from modifying another user's Todo.

### Lesson

Authentication answers:

> Who are you?

Authorization answers:

> What are you allowed to access?

---

# 🔎 Development Philosophy

I don't want this repository to be a collection of copied tutorial code.

For every chapter, I want to:

**Learn → Build → Break → Research → Fix → Understand → Document**

The purpose of this repository is to show my actual learning process and how I approach problems as a developer.

---

# 🚀 Future Improvements

Possible improvements for future chapters:

* Input validation
* Better error handling
* HTTP status code improvements
* Better authentication handling
* Persistent database storage
* Automated tests
* TypeScript
* PostgreSQL
* Prisma
* Docker
* CI/CD
* AWS deployment

---

# 📈 Progress

* ✅ Chapter 1
* ✅ Chapter 2
* ✅ Chapter 3
* ⏳ Chapter 4
* ⏳ Chapter 5
* ⏳ Chapter 6

---

## 👨‍💻 Goal

My goal is to become a professional Full Stack Developer with strong backend and software engineering fundamentals.

My learning path:

**JavaScript → TypeScript → Node.js → Express → PostgreSQL → Prisma → Docker → AWS → System Design**
