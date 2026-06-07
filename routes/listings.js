const express = require("express");
const router = express.Router();
const { listingSchema } = require("../schemas.js");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { isLoggedIn, listingAuthorization, validateListing } = require("../middleware.js");

// -------------------- Index Route (Show All Listings) --------------------

router.get(
    "/",
    wrapAsync(async(req, res) => {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs", { allListings });
    })
);

// -------------------- New Route (Form to Create Listing) --------------------

router.get("/new",
    isLoggedIn,
    (req, res) => {
        res.render("listings/new.ejs");
    });

// -------------------- Show Route (Show Single Listing) --------------------

router.get(
    "/:id",
    wrapAsync(async(req, res) => {
        let { id } = req.params;
        const doc = await Listing.findById(id).populate({ path: "reviews", populate: { path: "owner" } }).populate("owner");
        if (!doc) {
            req.flash("error", "Listing you Requested For does Not Exist");
            res.redirect("/listings")
        }
        res.render("listings/show.ejs", { doc });
    })
);

// -------------------- Edit Route (Form to Edit Listing) --------------------

router.get(
    "/:id/edit",
    isLoggedIn,
    listingAuthorization,
    wrapAsync(async(req, res) => {
        let { id } = req.params;
        const doc = await Listing.findById(id);
        if (!doc) {
            req.flash("error", "Listing you Requested For does Not Exist");
            res.redirect("/listings")
        }
        res.render("listings/edit.ejs", { doc });
    })
);

// -------------------- Update Route (Update Existing Listing) --------------------

router.put(
    "/:id",
    isLoggedIn,
    listingAuthorization,
    validateListing,
    wrapAsync(async(req, res, next) => {
        let { id } = req.params;

        if (!req.body.listing) {
            next(new ExpressError(400, "Send valid data"));
        }
        await Listing.findByIdAndUpdate(id, req.body.listing);
        req.flash("success", "Listing Updated");
        res.redirect(`/listings/${id}`);
    })
);

// -------------------- Delete Route (Delete Listing) --------------------

router.delete("/:id",
    isLoggedIn,
    listingAuthorization,

    async(req, res) => {
        let { id } = req.params;

        let deletedListing = await Listing.findByIdAndDelete(id);
        console.log(deletedListing);

        req.flash("success", "Listing Deleted");
        res.redirect("/listings");
    });

// -------------------- Create Route (Add New Listing) --------------------

router.post(
    "/",
    isLoggedIn,
    validateListing,
    wrapAsync(async(req, res, next) => {
        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        await newListing.save();
        req.flash("success", "New Listing Created");
        res.redirect("/listings");
    })
);

module.exports = router;