const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hduy:Abc123@freecluster.vuw19.mongodb.net/Taokhongbiet?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
module.exports = mongoose;