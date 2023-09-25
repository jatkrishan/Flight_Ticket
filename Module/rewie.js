const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
     user: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: "USer"
     },

    flight: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: "Flight"
    },
    Comment: {
           type: String,
           required: true,
           minLength: 5
    },
 

    

}, {timestamps: true})

module.exports = mongoose.model("Review", reviewSchema)