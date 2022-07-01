const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    last_name: String,
    password: { type: String },
    email: {
        type: String,
        require: true,
        index: true,
        unique: true,
        sparse: true,
    },
    signUpDate: { type: Date, default: Date.now() },
    ticket: [
        {
        title: { type: String, default: 'First ticket' },
        desciption: { type: String, default: 'Add your first ticket' },
        status: { type: String, default: "Doing" }
      },
    ]
})

const User = mongoose.model('User', userSchema);

module.exports = User;