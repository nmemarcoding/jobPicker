const mongoose = require("mongoose");
const user = require("./User");
const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: Array },
    location: { type: String, required: true },
    availability: { type: Array },
    price: { type: Number, required: true },
    rate: { type: Number },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

module.exports = mongoose.model("Job", ProductSchema);