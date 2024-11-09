const mongoose = require('mongoose');
const {Schema} = mongoose;

// firstName: String,
// lastName: String,
const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    type: String,
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;