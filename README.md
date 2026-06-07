# 🏡 Haven Stay

Haven Stay is a full-stack property listing web application where users can explore, create, review, edit, and manage accommodation listings. The project is built using **Node.js, Express.js, MongoDB, Mongoose, Passport.js, and EJS** following the MVC architecture.

---

# 🚀 Features

## 🔐 User Authentication

* User Registration (Sign Up)
* User Login
* User Logout
* Password hashing using Passport-Local-Mongoose
* Session-based Authentication
* Persistent login sessions using Express Session

## 🛡️ Authorization

* Only logged-in users can create listings
* Only listing owners can edit or delete their listings
* Only logged-in users can post reviews
* Only review owners can delete their reviews
* Protected routes using custom middleware

## 📋 Listing Management

* View all listings
* Flash Messages
* View individual listing details
* Create new listings
* Edit existing listings
* Delete listings
* Ownership tracking for listings

## ⭐ Reviews & Ratings

* Add reviews to listings
* Rate listings
* View reviews on listing pages
* Delete reviews
* Ownership tracking for reviews

## 💬 Flash Messages

* Success notifications
* Error notifications
* Authentication alerts
* Authorization alerts

## ✅ Validation

* Server-side validation using Joi
* Client-side validation using Bootstrap
* Custom validation middleware

## ⚠️ Error Handling

* Custom ExpressError class
* Centralized error middleware
* Async route handling using wrapAsync

## 🎨 User Interface

* EJS Templating Engine
* EJS-Mate Layouts
* Bootstrap 5
* Responsive Design
* Custom CSS Styling

## 🗄️ Database

* MongoDB
* Mongoose ODM
* One-to-Many Relationship (Listings ↔ Reviews)
* User ↔ Listings Association
* User ↔ Reviews Association

---

# 🛠️ Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Passport.js
* Passport-Local
* Passport-Local-Mongoose
* Express Session
* Connect Flash
* Joi

## Frontend

* EJS
* EJS-Mate
* Bootstrap 5
* HTML5
* CSS3
* JavaScript

---

# 📁 Project Structure

```text
Haven-Stay/
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listings.js
│   ├── review.js
│   └── user.js
│
├── public/
│   ├── css/
│   │   ├── style.css
│   │   ├── indexStyle.css
│   │   ├── newStyle.css
│   │   ├── showStyle.css
│   │   └── signupStyle.css
│   │
│   └── js/
│
├── routes/
│   ├── listings.js
│   └── review.js
│
├── utils/
│
├── views/
│   ├── includes/
│   │   ├── navbar.ejs
│   │   ├── footer.ejs
│   │   └── flash.ejs
│   │
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   ├── landing/
│   │   └── index.ejs
│   │
│   ├── listings/
│   │   ├── index.ejs
│   │   ├── show.ejs
│   │   ├── new.ejs
│   │   └── edit.ejs
│   │
│   └── users/
│       ├── signup.ejs
│       └── login.ejs
│
├── middleware.js
├── schemas.js
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 📌 Routes

## Authentication Routes

| Method | Route   |
| ------ | ------- |
| GET    | /signup |
| POST   | /signup |
| GET    | /login  |
| POST   | /login  |
| GET    | /logout |

## Listing Routes

| Method | Route              | Description       |
| ------ | ------------------ | ----------------- |
| GET    | /listings          | Show all listings |
| GET    | /listings/new      | New listing form  |
| POST   | /listings          | Create listing    |
| GET    | /listings/:id      | Show listing      |
| GET    | /listings/:id/edit | Edit listing form |
| PUT    | /listings/:id      | Update listing    |
| DELETE | /listings/:id      | Delete listing    |

## Review Routes

| Method | Route                           | Description   |
| ------ | ------------------------------- | ------------- |
| POST   | /listings/:id/reviews           | Create review |
| DELETE | /listings/:id/reviews/:reviewId | Delete review |

---

# 🔒 Authentication Flow

1. User registers through the Sign Up page.
2. Password is securely hashed using Passport-Local-Mongoose.
3. User logs in using Passport Local Strategy.
4. Passport creates a session after successful authentication.
5. Session ID is stored in the browser cookie.
6. User remains authenticated across requests until logout.

---

# 🛡️ Authorization Flow

### Listings

* Listing owners can edit their listings.
* Listing owners can delete their listings.
* Other users cannot modify listings they do not own.

### Reviews

* Review owners can delete their reviews.
* Other users cannot delete reviews they do not own.

---

# ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Start MongoDB

```bash
mongod
```

### Run Application

```bash
node app.js
```

or

```bash
nodemon app.js
```

### Open Browser

```text
http://localhost:3000
```

---

# 📚 Concepts Practiced

* MVC Architecture
* RESTful Routing
* CRUD Operations
* Authentication with Passport.js
* Authorization
* Sessions & Cookies
* Express Middleware
* Flash Messages
* Server-Side Rendering
* MongoDB & Mongoose
* Schema Validation with Joi
* Error Handling
* Async Programming
* Method Override
* Ownership-Based Access Control

---

# 🔮 Future Improvements

* Cloudinary Image Upload
* Search & Filtering
* Interactive Maps
* User Profiles
* Favorites / Wishlist
* Booking System
* Payment Integration
* Email Verification
* Forgot Password Functionality

---

# 👨‍💻 Author

**Alapati Murari**

Built while learning and practicing:

* Node.js
* Express.js
* MongoDB
* Mongoose
* Passport.js
* Authentication & Authorization
* Backend Development
* REST APIs

---

⭐ If you found this project useful, consider giving it a star on GitHub.
