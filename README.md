# 🏡 Haven Stay

Haven Stay is a full-stack property listing web application. Users can browse, create, edit, and delete accommodation listings. The project is built using Node.js, Express.js, MongoDB, Mongoose, and EJS.

---

## 🚀 Features

## Features

### 📋 Listing Management

* View all listings
* Flash Messages
* View individual listing details
* Create new listings
* Edit existing listings
* Delete listings

### ⭐ Reviews & Ratings

* Add reviews to listings
* Rate listings
* View reviews on listing pages
* Delete reviews

### ✅ Validation

* Server-side validation using Joi
* Client-side validation using Bootstrap

### ⚠️ Error Handling

* Custom error handling system
* Centralized error middleware
* Async error handling for routes

### 🎨 User Interface

* EJS templating engine
* EJS-Mate layouts
* Responsive Bootstrap design
* Custom CSS styling

### 🗄️ Database

* MongoDB integration
* Mongoose models and schemas
* One-to-many relationship between Listings and Reviews


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


## Project Structure

```text
Haven-Stay/
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   ├── listing.js
│   └── review.js
│
├── public/
│   ├── css/
│   │   ├── indexStyle.css
│   │   ├── newStyle.css
│   │   ├── showStyle.css
│   │   └── style.css
│   │
│   └── js/
│
├── routes/
│   ├── listings.js
│   └── review.js
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/
│   ├── includes/
│   │   ├── flash.ejs
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   │
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   └── listings/
│       ├── index.ejs
│       ├── new.ejs
│       ├── edit.ejs
│       └── show.ejs
│
├── .gitignore
├── app.js
├── schemas.js
├── package.json
├── package-lock.json
└── README.md
```

## 📌 Routes

| Method | Route                           | Description                    |
| ------ | ------------------------------- | ------------------------------ |
| GET    | /listings                       | Show all listings              |
| GET    | /listings/new                   | Form to create a listing       |
| POST   | /listings                       | Create a new listing           |
| GET    | /listings/:id                   | Show listing details           |
| GET    | /listings/:id/edit              | Edit listing form              |
| PUT    | /listings/:id                   | Update a listing               |
| DELETE | /listings/:id                   | Delete a listing               |
| POST   | /listings/:id/reviews           | Add a review to a listing      |
| DELETE | /listings/:id/reviews/:reviewId | Delete a review from a listing |


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
