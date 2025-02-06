# 🍴 CookBook API

This is the backend of a recipe book system built with **Node.js**, **Express**, **MongoDB**, and **Prisma ORM**. The goal is to provide a RESTful API to manage recipes.

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
git clone https://github.com/your-username/repository-name.git
cd repository-name
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
DATABASE_URL=mongodb://localhost:27017/recipebook
JWT_SECRET=your-secret-key
```

### 5. Configure Prisma

1. Generate the Prisma client:
```bash
npx prisma generate
```


2. (Optional) Run database migrations:
```bash
npx prisma migrate dev
```


### 6.Run the server
```bash
npm run dev
# or
yarn dev
```




