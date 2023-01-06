const Job = require('../models/Job');
const Order = require('../models/Order');
const router = require("express").Router();
const moment = require('moment');
const auth = require('../middlewear/auth');

// creat order
// router.post("/", async(req, res) => {


//     try {
//         const job = await Job.find({
//             _id: req.body.job,
//             [req.body.day]: { "$in": [req.body.time] }
//         })

//         if (job.length) {
//             const avaliableTime = await Order.find({ job: req.body.job, time: req.body.time, day: req.body.day })
//             if (!avaliableTime.length) {
//                 const newOrder = new Order({...req.body, owner: job[0].owner.toString() });
//                 const savedOrder = await newOrder.save();
//                 res.status(200).json(savedOrder);
//             } else {
//                 res.status(200).json(`${req.body.day} ${req.body.time} is tooken look for an other time`);
//             }

//         } else {
//             res.status(200).json(`change your time there is no avalable job at ${req.body.day} ${req.body.time}`);
//         }
//         // res.status(200).json(job);

//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err.message);
//     }
// });

// Get order with customer id 
router.get("/find/customer/:id", async(req, res) => {
    try {
        const job = await Order.find({ customer: req.params.id }).populate("job").populate("customer", "username email");
        res.status(200).json(job);
    } catch (err) {

        res.status(500).json(err.message);
    }
});

// get order base on job owner id 

router.get("/find/owner/:id", async(req, res) => {
    try {
        const jobs = await Order.find({ owner: req.params.id }).populate("job").populate("customer", "username email profile_image");

        res.status(200).json(jobs);
    } catch (err) {

        res.status(500).json(err.message);
    }
});


// test
router.post("/", async(req, res) => {
    try {
        // Find the job associated with the order
        const job = await Job.findById(req.body.job);

        // Check if the business is open at the specified time
        const isOpen = job.isBusinessOpen(req.body.day, req.body.time);
        if (!isOpen) {
            return res.status(400).json({ message: "The business is not open at the specified time." });
        }

        // Check if there are any existing orders at the specified time
        const existingOrders = await Order.find({
            $and: [{
                    $or: [{
                            time: {
                                $gte: moment(req.body.time, "HH:mm").subtract(1, "hours").format("HH:mm"),
                                $lte: req.body.time,
                            },
                            day: req.body.day,
                        },
                        {
                            time: {
                                $gte: req.body.time,
                                $lte: moment(req.body.time, "HH:mm").add(1, "hours").format("HH:mm"),
                            },
                            day: req.body.day,
                        },
                    ],
                },
                { job: req.body.job },
            ],
        });
        if (existingOrders.length > 0) {
            return res.status(400).json({ message: "There is already an order at the specified time." });
        }

        const newOrder = new Order({...req.body, owner: job.owner });
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);


    } catch (err) {
        console.log(err)
        res.status(500).json(err.message);
    }
});

module.exports = router;