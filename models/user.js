const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: String,
    password: String,
    macId: String
});

const User = mongoose.model('user',UserSchema);

module.exports = User;