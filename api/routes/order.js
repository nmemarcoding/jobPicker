const Job = require('../models/Job');
const Order = require('../models/Order');
const router = require("express").Router();
const moment = require('moment');
const stripe = require("stripe")("sk_test_51MSPoNCDDzqrs9GtQeixUdo8zLysPfC7dXVO4WvHxCaTMfb7WtPVcR05nj4o3ohD5Wqhkk1GZMtJ51MlCTcegDwD00lejp6Z9s");



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


// creat order
router.post("/", async(req, res) => {
    try {
        // Find the job associated with the order
        const job = await Job.findById(req.body.job);

        // Check if the business is open at the specified time
        const isOpen = job.isBusinessOpen(req.body.day, req.body.time);
        if (!isOpen) {
            
            return res.status(200).json({ message: "The business is not open at the specified time." });
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
            console.log("There is already an order at the specified time.")
            return res.status(200).json({ message: "There is already an order at the specified time." });
        }
      
        const body = {
            source: req?.body?.body?.token?.id,
            amount: req?.body?.body?.amount,
            currency: "usd"
        };
        
        // stripe.charges.create(body, ress => (stripeErr, stripeRes) => {
        //     clonsole.log(ress)
        //     if (stripeErr) {
                
        //         res.status(200).send(stripeErr.raw.message);
        //     } else {
        //         console.log("hereeeeeee")
        //         const newOrder = new Order({...req.body, owner: job.owner });
        //         const savedOrder =newOrder.save();
                
        //         res.status(200).send("Payment Successful");
        //     }
        // });
        stripe.charges.create(body)
        .then(data=>{
            if(data.status === "succeeded"){
                const newOrder = new Order({...req.body, owner: job.owner });
                const savedOrder =newOrder.save();
                res.status(200).send("Payment Successful");
            }
        })
       


    } catch (err) {
        console.log(err)
        res.status(500).json(err.message);
    }
});

const stripeChargeCallback = res => (stripeErr, stripeRes) => {
    if (stripeErr) {

        res.status(200).send(stripeErr.raw.message);
    } else {
        const newOrder = new Order({...req.body, owner: job.owner });
        const savedOrder =newOrder.save();
        res.status(200).json(savedOrder);
        res.status(200).send("Payment Successful");
    }
};

router.post('/payment', async(req, res) => {
    try {
        const body = {
            source: req?.body?.token?.id,
            amount: req?.body?.amount,
            currency: "usd"
        };
        stripe.charges.create(body, stripeChargeCallback(res));
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
})

module.exports = router;