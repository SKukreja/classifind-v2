require('dotenv').config({path:'./.env'});
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Job = require('./models/job');
const Bid = require('./models/bid');
const User = require('./models/user');

const app = express();

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(() => {
    console.log('Connection to MongoDB failed');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
  });

app.post("/api/jobs", (req, res, next) => {
    const job = new Job({
        requestorId: req.body.requestorId,
        jobTitle: req.body.jobTitle,
        jobDescription: req.body.jobDescription,
        jobCategory: req.body.jobCategory,
        jobAddressStreet: req.body.jobAddressStreet,
        jobAddressPostal: req.body.jobAddressPostal,
        jobAddressCity: req.body.jobAddressCity,
        jobAddressCountry: req.body.jobAddressCountry,
        jobPostingDate: new Date(),
        jobStatus: 'Submitted',
        jobImage: req.body.jobImage
    });
    job.save();
    res.status(201).json({
        message: 'Job posted successfully'
    });
});

app.get("/api/bids", (req, res, next) => {
    Bid.find({ jobId: req.query.id }).sort({ bidDate: -1 }).populate('bidProvider')
    .then(documents => {
        console.log(documents);
        res.status(200).json({
            message: "Fetched jobs successfully",
            bids: documents
        });
    });
});

app.get("/api/jobs", (req, res, next) => {
    Job.find().then(documents => {
        console.log(documents);
        res.status(200).json({
            message: "Fetched jobs successfully",
            jobs: documents
        });
    });
});

app.get("/api/job", (req, res, next) => {
    Job.findById(req.query.id)
    .then(job => {
    if (job) {
        res.status(200).json(job);
    } else {
        res.status(404).json({ message: "Job not found!" });
    }
    })
    .catch(error => {
        res.status(500).json({
            message: "Fetching job failed!"
        });
    });
});

module.exports = app;