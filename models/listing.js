const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema =new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image:{ 
        type: String,
        default:"https://unsplash.com/photos/a-winding-road-in-the-middle-of-a-mountain-range-e1E6ATACiO0",
        set: (v) => v === "" ? "https://unsplash.com/photos/a-winding-road-in-the-middle-of-a-mountain-range-e1E6ATACiO0" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports=Listing;