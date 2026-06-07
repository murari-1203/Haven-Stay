const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schemas.js");
const { isLoggedIn, validateReview, reviewAuthorization } = require("../middleware.js");


// -------------------- Post Route (Add New Review) --------------------

router.post(
    "/",
    isLoggedIn,
    validateReview,
    async(req, res) => {
        let { id } = req.params;
        let listing = await Review.findById(id);
        let newReview = new Review(req.body.review);
        newReview.owner = req.user._id;
        listing.reviews.push(newReview);

        await newReview.save();
        await listing.save();

        req.flash("success", "New Review Created");
        res.redirect(`/listings/${id}`);

    })

// -------------------- Delete Route (Delete Review) -------------------

router.delete("/:reviewId",
    isLoggedIn,
    reviewAuthorization,
    async(req, res) => {
        let { id, reviewId } = req.params;
        await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
        await Review.findByIdAndDelete(reviewId);

        req.flash("success", "Review Deleted");
        res.redirect(`/listings/${id}`);

    }
)

module.exports = router;