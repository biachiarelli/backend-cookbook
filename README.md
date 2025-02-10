# 🍴 CookBook API

This is the backend of a recipe book system built with **Node.js**, **Express**, **MongoDB**, and **Prisma ORM**. The goal is to provide a RESTful API to manage recipes.

**Frontend: https://github.com/biachiarelli/frontend-cookbook**

---

## 📋 Features

- **Recipes**:
  - CRUD (Create, Read, Update, Delete) operations for recipes.
  - Support for searching by title.


---

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime for backend development.
- **Express**: Framework for building the REST API.
- **MongoDB**: NoSQL database for data storage.
- **Prisma**: ORM to facilitate database manipulation.

---

## 🚀 How to Run the Project

### 1. Prerequisites

- **Node.js** installed (version 16 or higher).
- **MongoDB** set up and running.
- **NPM** or **Yarn** as the package manager.

### 2. Clone the repository

```bash
git clone https://github.com/biachiarelli/backend-cookbook
cd backend-cookbook
```

### 3. Install dependencies

```bash
npm install
# or
yarn install
```

### 4. Configure environment variables

```bash
PORT=3000
```

### 5. Configure Prisma

1. Generate the Prisma client:
```bash
npx prisma generate
```


2. (Optional) Push changes database:
```bash
npx prisma db push
```


### 6.Run the server
```bash
cd src
node --watch server.js
```




