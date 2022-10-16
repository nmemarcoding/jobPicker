const mongoose = require("mongoose");
const user = require("./User");

const GeoSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"

    },

});


const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: Array },
    geometry: {
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
    availability: { type: Array },
    price: { type: Number, required: true },
    rate: { type: Number },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

JobSchema.index({ geometry: "2dsphere" });

module.exports = mongoose.model("Job", JobSchema);

// createdAt: { type: Date, expires: 30, default: Date.now }