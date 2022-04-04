const mongoose = require('./db');

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

const User = mongoose.model('User', userSchema);

module.exports = { User: User, userSchema: userSchema }
