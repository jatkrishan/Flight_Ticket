const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    deparetureAirport: {
        type: String,
        required: true
    },
    arrivealAirport: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    airline: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: "Airline"
    },
    flightDate: {
        type: Date,
        default: Date.now()
    },
    depencatureTime: {
        type: Timestamp
    },
    arrivelTime: {
        type: Timestamp
    },
    flightNumber: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required:true
    },
    boardingGate : {
         type: Number,
    }

}, {timestamps: true})

module.exports = mongoose.model("Flight", flightSchema)