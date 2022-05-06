const mongoose = require('./dbConnect')
const cartSchema = mongoose.Schema({
    listProduct: [
        { idProduct: { type: String, ref: 'product' }, quantity: Number },
    ],
    cartsPrice: Number,
    iduser: { type: String, ref: 'user' }
}, { collection: 'cart' })

let cartsModel = mongoose.model('carts', cartSchema);

module.exports = cartsModel;