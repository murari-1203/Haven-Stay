# 🏡 HavenStay

<div align="center">

<!-- Core Stack -->
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logoColor=white)

<!-- Cloud & Auth -->
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Passport.js](https://img.shields.io/badge/Passport.js-34E27A?style=for-the-badge&logoColor=black)
![Resend](https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=mail.ru&logoColor=white)

<!-- Frontend & Maps -->
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)
![Leaflet](https://img.shields.io/badge/Leaflet.js-199900?style=for-the-badge&logo=leaflet&logoColor=white)

<!-- Deployment -->
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

<br/>

### 🌐 [Live Demo →](https://havenstay.site)

https://havenstay.site

*A modern Airbnb-inspired vacation rental platform built with Node.js, Express.js, MongoDB, Cloudinary, Leaflet Maps, and transactional email via Resend.*

</div>

---

## 📖 Overview

HavenStay is a full-stack web application that allows users to discover, share, and manage unique vacation rentals. Inspired by Airbnb, the platform provides a seamless experience for property listing, image management, location visualization, user reviews, and automated email notifications.

The project follows the **MVC architecture** and implements secure authentication, cloud image storage, interactive maps, role-based authorization, and transactional emails via Resend.

---

## ✨ Features

### 🔐 Authentication & Authorization

- User Registration with **Welcome Email** (powered by Resend)
- User Login & Logout
- Session-Based Authentication
- Password Hashing via Passport.js
- Flash Messages
- Protected Routes & Authorization Middleware
- Owner-only Listing Management
- Author-only Review Deletion

### 📧 Transactional Email — Resend

- **Welcome email** automatically sent when a new user signs up
- Branded HTML email with user's name and onboarding information
- Powered by [Resend](https://resend.com) for reliable delivery
- Server-side email dispatch with error handling (non-blocking)

### 🏠 Listing Management

- Create, View, Edit, and Delete Listings
- Category-Based Filtering
- User-Specific "My Listings" Dashboard

### 📸 Cloudinary Image Upload

- Upload Property Images with Cloud-Based Storage
- Optimized Image Delivery & Secure Hosting
- Automatic Image URL Management

### 🗺️ Interactive Maps

- Leaflet.js Integration for Property Location Visualization
- Dynamic Location Markers & Interactive Map Navigation

### ⭐ Reviews & Ratings

- Add & Delete Reviews
- Property Feedback System with User-Based Authorization

### 🎨 User Experience

- Responsive Design with Bootstrap 5
- Dynamic Flash Messages
- Clean, Modern, Mobile-Friendly Interface

### 🛡️ Security & Validation

- Joi Validation & Server-Side Validation
- Session Security & Route Protection
- Error Handling Middleware & Ownership Verification

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square) |
| **Frontend** | ![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat-square&logo=bootstrap&logoColor=white) ![EJS](https://img.shields.io/badge/EJS-B4CA65?style=flat-square) |
| **Auth** | ![Passport.js](https://img.shields.io/badge/Passport.js-34E27A?style=flat-square) ![Express Session](https://img.shields.io/badge/Express_Session-FF6C37?style=flat-square) |
| **Email** | ![Resend](https://img.shields.io/badge/Resend-000000?style=flat-square&logo=mail.ru&logoColor=white) |
| **Maps** | ![Leaflet](https://img.shields.io/badge/Leaflet.js-199900?style=flat-square&logo=leaflet&logoColor=white) |
| **Images** | ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white) |
| **Validation** | ![Joi](https://img.shields.io/badge/Joi-0080FF?style=flat-square) |
| **Deployment** | ![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=black) |

---

## 📂 Project Structure

```bash
HavenStay/
│
├── controller/
│   ├── listings.js
│   ├── review.js
│   └── users.js           # Includes Resend welcome email logic
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
├── public/
│   ├── css/
│   │   ├── indexStyle.css
│   │   ├── newStyle.css
│   │   ├── showStyle.css
│   │   ├── signupStyle.css
│   │   └── style.css
│   └── js/
│
├── routes/
│   ├── listings.js
│   ├── review.js
│   └── user.js
│
├── utils/
│   ├── ExpressError.js
│   ├── geocode.js
│   ├── mailer.js          # Resend email utility
│   └── wrapAsync.js
│
├── views/
│   ├── includes/
│   ├── landing/
│   ├── layouts/
│   ├── listings/
│   └── users/
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
git clone https://github.com/murari-1203/havenstay.git
cd havenstay
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
# MongoDB
ATLAS_DB_URL=your_mongodb_connection_string

# Session
SECRET=your_session_secret

# Cloudinary
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# Resend (Transactional Email)
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=onboarding@yourdomain.com
```

### 4️⃣ Start the Application

```bash
npm start
# or
node app.js
```

### 5️⃣ Open in Browser

```
http://localhost:3000
```

---

## 🗄️ Database Models

### User Model

```javascript
{
  username: String,
  email:    String
}
```

### Listing Model

```javascript
{
  title:       String,
  description: String,
  image:       Object,
  price:       Number,
  location:    String,
  country:     String,
  category:    String,
  geometry:    Object,
  owner:       ObjectId,
  reviews:     [ObjectId]
}
```

### Review Model

```javascript
{
  rating:  Number,
  comment: String,
  author:  ObjectId
}
```

---

## 📧 Email Integration — Resend

When a new user registers on HavenStay, a **branded welcome email** is dispatched automatically using the Resend API.

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
GET     /signup    → renders form
POST    /signup    → creates user + sends welcome email via Resend
GET     /login
POST    /login
GET     /logout
```

---

## 🏝️ Property Categories

`Beach` · `Mountains` · `Camping` · `Arctic` · `Desert` · `Forest` · `Lake` · `City` · `Countryside` · `Historical` · `Castle` · `Farm` · `Luxury` · `Adventure`

---

## 🚀 Deployment

The project is deployed on **Render**.

🔗 **[https://haven-stay.site](https://haven-stay.site)**

### Steps

1. Push code to GitHub
2. Create a [Render](https://render.com) account and connect your repo
3. Set all environment variables (including `RESEND_API_KEY`)
4. Deploy 🚀

---

## 🛡️ Security Features

- Password Hashing via Passport.js
- Session-Based Authentication
- Route Protection & Ownership Verification
- Joi Schema Validation
- Express Error Handling Middleware
- MongoDB Injection Protection
- Flash Notifications

---

## 🔮 Future Enhancements

- [ ] Property Booking System
- [ ] Wishlist / Saved Properties
- [ ] Advanced Search & Filters
- [ ] Payment Gateway Integration
- [ ] User Profiles & Avatars
- [ ] Property Availability Calendar
- [ ] Real-Time Notifications
- [ ] Admin Dashboard
- [ ] In-App Chat System
- [ ] Email notifications for new reviews & bookings

---

## 🤝 Contributing

Contributions are welcome!

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/your-feature-name

# 3. Commit your changes
git commit -m "feat: add your feature"

# 4. Push and open a Pull Request
git push origin feature/your-feature-name
```

---

## 👨‍💻 Author

**Alapati Murari**
Full Stack Developer · Node.js · Express.js · MongoDB

[![GitHub](https://img.shields.io/badge/GitHub-murari--1203-181717?style=flat-square&logo=github)](https://github.com/murari-1203)

---

<div align="center">

**If you found this project useful, consider giving it a ⭐**

### Thank You for Visiting HavenStay 🏡
**Happy Coding! 🚀**

</div>
