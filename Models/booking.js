const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
   id: {
      type: Number,
      required: true,
      unique: true
   },
    airline: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: "Airline"
    },

    flightNumber: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: "Flight"
    },

    user: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: "User"
    },
    status: {
        type: String,
        default: "in process",
        enum: ["booked", "cancelled", "in process"]
    },
     
    price: {
        type: String,
        required:true
    }

}, {timestamps: true})

module.exports = mongoose.model("Booking", bookingSchema)