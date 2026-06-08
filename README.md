# 🏡 HavenStay

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js\&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-Framework-000000?logo=express\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb\&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-880000)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Image%20Storage-3448C5?logo=cloudinary\&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-Maps-199900?logo=leaflet\&logoColor=white)
![Passport.js](https://img.shields.io/badge/Passport.js-Authentication-34E27A)
![Bootstrap](https://img.shields.io/badge/Bootstrap-UI-7952B3?logo=bootstrap\&logoColor=white)
![Render](https://img.shields.io/badge/Render-Deployed-46E3B7?logo=render\&logoColor=white)

### 🌐 Live Demo

**https://haven-stay-fkwi.onrender.com**

*A modern Airbnb-inspired vacation rental platform built with Node.js, Express.js, MongoDB, Cloudinary, and Leaflet Maps.*

</div>

---

## 📖 Overview

HavenStay is a full-stack web application that allows users to discover, share, and manage unique vacation rentals. Inspired by Airbnb, the platform provides a seamless experience for property listing, image management, location visualization, and user reviews.

The project follows the MVC architecture and implements secure authentication, cloud image storage, interactive maps, and role-based authorization.

---

## ✨ Features

### 🔐 Authentication & Authorization

* User Registration
* User Login & Logout
* Session-Based Authentication
* Password Hashing using Passport.js
* Flash Messages
* Protected Routes
* Authorization Middleware
* Owner-only Listing Management
* Author-only Review Deletion

### 🏠 Listing Management

* Create New Listings
* View All Listings
* View Detailed Property Pages
* Edit Listings
* Delete Listings
* Category-Based Filtering
* User-Specific "My Listings" Dashboard

### 📸 Cloudinary Image Upload

* Upload Property Images
* Cloud-Based Storage
* Optimized Image Delivery
* Secure Image Hosting
* Automatic Image URL Management

### 🗺️ Interactive Maps

* Leaflet.js Integration
* Property Location Visualization
* Dynamic Location Markers
* Interactive Map Navigation

### ⭐ Reviews & Ratings

* Add Reviews
* Delete Reviews
* Property Feedback System
* User-Based Review Authorization

### 🎨 User Experience

* Responsive Design
* Bootstrap Components
* Dynamic Flash Messages
* Clean and Modern Interface
* Mobile-Friendly Layout

### 🛡️ Security & Validation

* Joi Validation
* Server-Side Validation
* Session Security
* Route Protection
* Error Handling Middleware
* Ownership Verification

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap 5
* EJS Templates

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose ODM

### Authentication

* Passport.js
* Passport Local
* Express Session

### Cloud Services

* Cloudinary

### Maps & Geocoding

* Leaflet.js
* Geocoding APIs

### Validation

* Joi

### Deployment

* Render

---

## 📂 Project Structure

```bash
HavenStay
│
├── controller
│   ├── listings.js
│   ├── review.js
│   └── users.js
│
├── init
│   ├── data.js
│   └── index.js
│
├── models
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── public
│   ├── css
│   │   ├── indexStyle.css
│   │   ├── newStyle.css
│   │   ├── showStyle.css
│   │   ├── signupStyle.css
│   │   └── style.css
│   │
│   └── js
│
├── routes
│   ├── listings.js
│   ├── review.js
│   └── user.js
│
├── utils
│   ├── ExpressError.js
│   ├── geocode.js
│   └── wrapAsync.js
│
├── views
│   ├── includes
│   ├── landing
│   ├── layouts
│   ├── listings
│   └── users
│
├── .env
├── .gitignore
├── app.js
├── cloudconfig.js
├── middleware.js
├── package.json
├── package-lock.json
├── README.md
└── schemas.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/havenstay.git
cd havenstay
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create Environment Variables

Create a `.env` file in the root directory.

```env
ATLAS_DB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### 4️⃣ Start the Application

```bash
npm start
```

or

```bash
node app.js
```

### 5️⃣ Open in Browser

```text
http://localhost:3000
```

---

## 🗄️ Database Models

### User Model

```javascript
{
  username: String,
  email: String
}
```

### Listing Model

```javascript
{
  title: String,
  description: String,
  image: Object,
  price: Number,
  location: String,
  country: String,
  category: String,
  geometry: Object,
  owner: ObjectId,
  reviews: [ObjectId]
}
```

### Review Model

```javascript
{
  rating: Number,
  comment: String,
  author: ObjectId
}
```

---

## 🏝️ Property Categories

* Beach
* Mountains
* Camping
* Arctic
* Desert
* Forest
* Lake
* City
* Countryside
* Historical
* Castle
* Farm
* Luxury
* Adventure

---

## 🌐 Application Routes

### Listings

```http
GET     /listings
GET     /listings/new
POST    /listings
GET     /listings/:id
GET     /listings/:id/edit
PUT     /listings/:id
DELETE  /listings/:id
```

### Reviews

```http
POST    /listings/:id/reviews
DELETE  /listings/:id/reviews/:reviewId
```

### Users

```http
GET     /signup
POST    /signup

GET     /login
POST    /login

GET     /logout
```

---

## 🚀 Deployment

The project is deployed using Render.

### Live Website

🔗 https://haven-stay-fkwi.onrender.com

### Deployment Steps

1. Push code to GitHub.
2. Create a Render account.
3. Connect GitHub repository.
4. Configure environment variables.
5. Deploy application.

---

## 🛡️ Security Features

* Password Hashing
* Session Authentication
* Route Protection
* Ownership Verification
* Joi Validation
* Express Error Handling
* MongoDB Injection Protection
* Flash Notifications

---

## 🎯 Future Enhancements

* Property Booking System
* Wishlist Feature
* Advanced Search
* Payment Gateway Integration
* User Profiles
* Property Availability Calendar
* Real-Time Notifications
* Admin Dashboard
* Chat System

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 👨‍💻 Author

### Alapati Murari

Full Stack Developer | Node.js | Express.js | MongoDB

Built with ❤️ using modern web technologies.

---

## ⭐ Show Your Support

If you like this project:

⭐ Star the repository

🍴 Fork the repository

📢 Share it with others

---

<div align="center">

### Thank You for Visiting HavenStay 🏡

**Happy Coding! 🚀**

</div>
