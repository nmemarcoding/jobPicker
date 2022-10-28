const mongoose = require("mongoose");
const user = require("./User");


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
        address: {
            type: String,
        },

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

module.exports = mongoose.model("Job", JobSchema);

// createdAt: { type: Date, expires: 30, default: Date.now }