const mongoose = require('./dbConnect')

const userSchema = mongoose.Schema(
    {
        username: String,
        password: String,
        email: String,
        phone: String,
        locatin: String,
    }, { collection: 'user' }
)

const userModel = mongoose.model('user', userSchema)

module.exports = userModel;