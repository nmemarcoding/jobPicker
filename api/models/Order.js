const mongoose = require("mongoose");
const user = require("./User");
const job = require("./Job");


const OrderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    },
    time: { type: String, required: true, },

    // location: {
    //     type: {
    //         type: String,
    //         enum: ['Point'],
    //         required: true
    //     },
    //     coordinates: {
    //         type: [Number],
    //         index: "2dsphere"

    //     },
    //     address: {
    //         type: String,
    //     },

    // },
    customerAddress: { type: String, required: true },
    status: { type: String, default: 'in progress' }

}, { timestamps: true });

OrderSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Order", OrderSchema);

// createdAt: { type: Date, expires: 30, default: Date.now }