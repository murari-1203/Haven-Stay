const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const expressSession = require("express-session");

app = express();

const flash = require("connect-flash");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const ExpressError = require("./utils/ExpressError.js");

const listingRouter = require("./routes/listings.js")
const reviewRouter = require("./routes/review.js")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
    secret: "MySecret",
    resave: false,
    saveUninitialized: true

}

app.use(expressSession(sessionOptions));
app.use(flash())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
})

app.engine("ejs", ejsMate);



// -------------------- Database Connection --------------------

main()
    .then(() => {
        console.log("Connexted TO DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

// -------------------- Server Start --------------------

app.listen(3000, () => {
    console.log("Server Listening on port 3000");
});

// -------------------- Home Route --------------------

app.get("/", (req, res) => {
    res.send("Root Page");
});

// -------------------- Listing Routes--------------------

app.use("/listings", listingRouter)


// -------------------- Review Routes--------------------

app.use("/listings/:id/reviews", reviewRouter)


// -------------------- 404 Route Handler --------------------

app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// -------------------- Global Error Handling Middleware --------------------

app.use((err, req, res, next) => {
    let { statusCode = 500, message } = err;

    res.status(statusCode).send(message);
});