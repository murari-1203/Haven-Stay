const mongoose = require("mongoose");
const initData = require("./data.js")

const Listing = require("../models/listing.js")

main().then(() => {
    console.log("Conneyted TO DB")
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB = async() => {
    await Listing.deleteMany({});
    initData.data.forEach((obj) => {
        obj.owner = "6a242790878226e54ecab1f1";
    });
    await Listing.insertMany(initData.data);
    console.log("data was inititialized");
}

initDB();