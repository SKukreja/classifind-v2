const mongoose = require('mongoose');

const bidSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true},    
    bidDate: { type: Date, default: new Date() },
    bidPrice: { type: Number },
    jobId: { type: mongoose.Schema.Types.ObjectId },
    providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'bid' }
});

bidSchema.virtual('bidProvider', {
    ref: 'user',
    localField: 'providerId',
    foreignField: '_id',
    justOne: true
});

bidSchema.set('toObject', { virtuals: true });
bidSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('bid', bidSchema);