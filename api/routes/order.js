const Order = require('../models/Order')
const router = require("express").Router();

// creat order
router.post("/", async(req, res) => {
    const newOrder = new Order(req.body);

    try {
        const savedJob = await newOrder.save();
        res.status(200).json(savedJob);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});



module.exports = router;