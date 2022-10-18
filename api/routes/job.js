const Job = require('../models/Job')

const router = require("express").Router();


// creat job
router.post("/", async(req, res) => {
    const newJob = new Job(req.body);

    try {
        const savedJob = await newJob.save();
        res.status(200).json(savedJob);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", async(req, res) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id, {
                $set: req.body,
            }, { new: true }
        );
        res.status(200).json(updatedJob);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", async(req, res) => {
    try {
        await Job.findByIdAndDelete(req.params.id);
        res.status(200).json("Job has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET Job
router.get("/find/:id", async(req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json(job);
    } catch (err) {

        res.status(500).json(err);
    }
});

//Get all jobs
router.get("/find", async(req, res) => {
    console.log(req.query)
    try {
        const job = await Job.find({
            location: {
                $nearSphere: {
                    $geometry: { type: "Point", coordinates: [req.query.long, req.query.lat] },
                    $minDistance: 0,
                    $maxDistance: 500
                }
            },
            desc: { $regex: req.query.desc },


        }).populate("owner", "username");
        res.status(200).json(job);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});
module.exports = router;