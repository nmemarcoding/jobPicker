const Job = require('../models/Job');
const Order = require('../models/Order');
const router = require("express").Router();

// creat order
router.post("/", async(req, res) => {
    const newOrder = new Order(req.body);

    try {
        const job = await Job.find({
            _id: req.body.job,
            [req.body.day]: { "$in": [req.body.time] }
        })
        if (job.length) {
            const avaliableTime = await Order.find({ job: req.body.job, time: req.body.time, day: req.body.day })
            if (!avaliableTime.length) {
                const savedOrder = await newOrder.save();
                res.status(200).json(savedOrder);
            } else {
                res.status(200).json(`${req.body.day} ${req.body.time} is tooken look for an other time`);
            }

        } else {
            res.status(200).json(`change your time there is no avalable job at ${req.body.day} ${req.body.time}`);
        }
        // res.status(200).json(job);

    } catch (err) {
        console.log(err)
        res.status(500).json(err.message);
    }
});

// Get order with customer id 
router.get("/find/customer/:id", async(req, res) => {
    try {
        const job = await Order.find({ customer: req.params.id }).populate("job").populate("customer", "username email");
        res.status(200).json(job);
    } catch (err) {

        res.status(500).json(err);
    }
});

// get order base on job owner id 

router.get("/find/owner/:id", async(req, res) => {
    try {
        const jobs = await Order.find({ "job.owner": req.params.id }).populate("job").populate("customer", "username email");
        console.log(jobs);
        res.status(200).json(jobs);
    } catch (err) {

        res.status(500).json(err.message);
    }
});

module.exports = router;