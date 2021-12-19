const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        trim:true
    },
    role: {
        type: String,
        default: 'subscriber'
    }
}, { timestamps: true });


const User = model('User', userSchema);
module.exports = User;