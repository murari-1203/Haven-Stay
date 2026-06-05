const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

app = express();

const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schemas.js");
const { reviewSchema } = require("./schemas.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.engine("ejs", ejsMate);

// -------------------- Validation Middleware --------------------

const validateListing = (req, res, next) => {
    const result = listingSchema.validate(req.body);

    if (result.error) {
        throw new ExpressError(400, result.error.message);
    } else {
        next();
    }
};

const validateReview = (req, res, next) => {
    console.log("Inside validateReview");
    const result = reviewSchema.validate(req.body);
    console.log(req.body);

    if (result.error) {
        throw new ExpressError(400, result.error.message);
    } else {
        next();
    }
};

const Listing = require("./models/listing.js");
const Review = require("./models/review.js")

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

// -------------------- Index Route (Show All Listings) --------------------

app.get(
    "/listings",
    wrapAsync(async (req, res) => {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs", { allListings });
    })
);

// -------------------- New Route (Form to Create Listing) --------------------

app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

// -------------------- Show Route (Show Single Listing) --------------------

app.get(
    "/listings/:id",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        const doc = await Listing.findById(id).populate("reviews");
        res.render("listings/show.ejs", { doc });
    })
);

// -------------------- Edit Route (Form to Edit Listing) --------------------

app.get(
    "/listings/:id/edit",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        const doc = await Listing.findById(id);
        res.render("listings/edit.ejs", { doc });
    })
);

// -------------------- Update Route (Update Existing Listing) --------------------

app.put(
    "/listings/:id",
    wrapAsync(async (req, res, next) => {
        let { id } = req.params;

        if (!req.body.listing) {
            next(new ExpressError(400, "Send valid data"));
        }

        await Listing.findByIdAndUpdate(id, req.body.listing);
        res.redirect(`/listings/${id}`);
    })
);

// -------------------- Delete Route (Delete Listing) --------------------

app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;

    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);

    res.redirect("/listings");
});

// -------------------- Create Route (Add New Listing) --------------------

app.post(
    "/listings",
    validateListing,
    wrapAsync(async (req, res, next) => {
        const newListing = new Listing(req.body.listing);

        await newListing.save();

        res.redirect("/listings");
    })
);


// -------------------- Post Route (Add New Review) --------------------

app.post(
    "/listings/:id/reviews", 
    validateReview,
    async (req, res) => {
        let { id } = req.params;
        let listing = await Listing.findById(id);
        let newReview = new Review(req.body.review);
        

        listing.reviews.push(newReview);

        await newReview.save();
        await listing.save();

        console.log("review Saved");
        res.redirect(`/listings/${id}`);

})

// -------------------- Delete Route (Delete Review) -------------------

app.delete("/listings/:id/reviews/:reviewId",
    async (req, res) => {
        let {id, reviewId} = req.params;
        await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}})
        await Review.findByIdAndDelete(reviewId);
        
        res.redirect(`/listings/${id}`);

    }
)

// -------------------- 404 Route Handler --------------------

app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// -------------------- Global Error Handling Middleware --------------------

app.use((err, req, res, next) => {
    let { statusCode = 500, message } = err;

    res.status(statusCode).send(message);
});