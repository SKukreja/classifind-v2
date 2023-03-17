const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    reviewComments: { type: String },
    reviewRating: { type: Number },
    completedJobId: { type: mongoose.Schema.Types.ObjectId },
    reviewDate: {type: Date },
    requestorUserId: { type: mongoose.Schema.Types.ObjectId },
    providerUserId: { type: mongoose.Schema.Types.ObjectId },
});

reviewSchema.virtual('jobProvider', {
    ref: 'user',
    localField: 'providerUserId',
    foreignField: '_id',
    justOne: true
});

reviewSchema.virtual('jobRequestor', {
    ref: 'user',
    localField: 'requestorUserId',
    foreignField: '_id',
    justOne: true
});

reviewSchema.virtual('job', {
    ref: 'job',
    localField: 'completedJobId',
    foreignField: '_id',
    justOne: true
});

reviewSchema.set('toObject', { virtuals: true });
reviewSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('review', reviewSchema);