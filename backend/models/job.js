const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true},
    requestorId: { type: mongoose.Schema.Types.ObjectId },
    jobTitle: { type: String },
    jobDescription: {type: String },
    jobCategory: {type: String },
    jobAddressStreet: {type: String },
    jobAddressPostal: {type: String },
    jobAddressCity: {type: String },
    jobAddressCountry: {type: String },
    jobPostingDate: { type: Date, default: new Date() },
    jobStatus: {type: String, default: "Submitted" },
    jobImage: {type: String, default: "" }
});

module.exports = mongoose.model('job', jobSchema);