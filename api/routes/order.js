const Job = require('../models/Job');
const Order = require('../models/Order');
const router = require("express").Router();

// creat order
router.post("/", async(req, res) => {
    const newOrder = new Order(req.body);

    try {
        const job = await Job.find({
            _id: req.body.job,
            availability: { "$in": [req.body.time] }
        })
        if (job.length) {
            const avaliableTime = await Order.find({ job: req.body.job, time: req.body.time })
            if (!avaliableTime.length) {
                const savedOrder = await newOrder.save();
                res.status(200).json(savedOrder);
            } else {
                res.status(200).json("this time is token look for an other time");
            }

        } else {
            res.status(200).json("change your time there is no avalable job at this time");
        }

    } catch (err) {
        console.log(err)
        res.status(500).json(err.message);
    }
});

// Get order with customer id 
router.get("/find/customer/:id", async(req, res) => {
    try {
        const job = await Order.find({ "customer": req.params.id }).populate("job").populate("customer", "username email");
        res.status(200).json(job);
    } catch (err) {

        res.status(500).json(err);
    }
});


module.exports = router;