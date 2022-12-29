const mongoose = require("mongoose");
const user = require("./User");
const moment = require('moment');


const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: Array },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            index: "2dsphere"

        },


    },
    address: {
        type: String,
    },
    monday: { type: Array },
    tusday: { type: Array },
    wednesday: { type: Array },
    thursday: { type: Array },
    friday: { type: Array },
    saturday: { type: Array },
    sunday: { type: Array },
    price: { type: Number, required: true },
    rate: { type: Number },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

JobSchema.index({ location: "2dsphere" });

JobSchema.methods.isBusinessOpen = function isBusinessOpen(day, time) {
    // Convert the day of the week to a lowercase string (e.g., "Monday" -> "monday")
    day = day.toLowerCase();

    // Find the appropriate field in the schema based on the day of the week
    const schedule = this[day];

    // Check if the business is open at the current time
    if (schedule) {
        for (let i = 0; i < schedule.length; i += 2) {
            // Create moment objects for the opening and closing times
            const openingTime = moment(schedule[i], "HH:mm");
            const closingTime = moment(schedule[i + 1], "HH:mm");

            // Create a moment object for the current time
            const times = moment(time, "HH:mm");

            // Check if the current time falls within the opening and closing times
            if (times.isBetween(openingTime, closingTime, null, "[]")) {
                return true;
            }
        }
    }
    return false;
};


module.exports = mongoose.model("Job", JobSchema);

// createdAt: { type: Date, expires: 30, default: Date.now }