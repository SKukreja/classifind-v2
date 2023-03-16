const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    challenges: { type: String },
    created: { type: String },
    credentials: { type: String },
    email: { type: String },
    emailVerified: { type: String },
    lastUpdated: { type: String },
    password: { type: String },
    realm: { type: String },
    status: { type: String },
    userAddressCity: { type: String },
    userAddressCountry: { type: String },
    userAddressPostal: { type: String },
    userAddressStreet: { type: String },
    userDescription: { type: String },
    userFullName: { type: String },
    userPhone: { type: String },
    username: { type: String },
    verificationToken: { type: String },
});

module.exports = mongoose.model('user', userSchema);