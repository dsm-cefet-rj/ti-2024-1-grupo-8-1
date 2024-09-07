const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    //username: {type: String, required:true, unique:true},
    //password: {type: String, required:true}
    admin: {type: Boolean, default: false}
});

User.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);

module.exports = User;