# 🏡 WanderStay

WanderStay is a full-stack property listing web application. Users can browse, create, edit, and delete accommodation listings. The project is built using Node.js, Express.js, MongoDB, Mongoose, and EJS.

---

## 🚀 Features

### 📋 Listing Management
- View all listings
- View individual listing details
- Create new listings
- Edit existing listings
- Delete listings

### ✅ Validation
- Server-side validation using Joi
- Client-side validation using Bootstrap
- Prevents invalid data submission

### ⚠️ Error Handling
- Custom error handling system
- Centralized error middleware
- Async error handling for routes
- 404 page handling

### 🎨 User Interface
- EJS templating engine
- EJS-Mate layouts
- Responsive Bootstrap design
- Custom CSS styling

### 🗄️ Database
- MongoDB integration
- Mongoose models and schemas
- Persistent storage for listings

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Joi

### Frontend
- EJS
- EJS-Mate
- Bootstrap 5
- HTML5
- CSS3
- JavaScript

---

## 📁 Project Structure

```text
WanderStay/
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   └── listing.js
│
├── public/
│   ├── css/
│   └── js/
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/
│   ├── includes/
│   ├── layouts/
│   └── listings/
│
├── app.js
├── schemas.js
├── package.json
└── README.md
```

---

## 📌 Routes

| Method | Route | Description |
|----------|----------|----------|
| GET | /listings | Show all listings |
| GET | /listings/new | Form to create a listing |
| POST | /listings | Create a new listing |
| GET | /listings/:id | Show listing details |
| GET | /listings/:id/edit | Edit listing form |
| PUT | /listings/:id | Update a listing |
| DELETE | /listings/:id | Delete a listing |

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Start MongoDB

Make sure MongoDB is running locally.

### Run the Application

```bash
node app.js
```

or

```bash
nodemon app.js
```

### Open in Browser

```text
http://localhost:3000/listings
```

---

## 📚 Concepts Practiced

- RESTful Routing
- CRUD Operations
- Express Middleware
- Server-Side Rendering
- Static File Serving
- MongoDB & Mongoose
- Schema Validation
- Error Handling
- Async Programming
- Method Override
- MVC Project Structure

---

## 🔮 Future Improvements

- User Authentication & Authorization
- Reviews and Ratings
- Image Upload with Cloudinary
- Search and Filtering
- Map Integration
- User Profiles
- Booking Functionality

---

## 👨‍💻 Author

**Alapati Murari**

Built while learning and practicing:
- Node.js
- Express.js
- MongoDB
- Mongoose
- Backend Development
- REST APIs

---

⭐ If you found this project useful, consider giving it a star on GitHub.
