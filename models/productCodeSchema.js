const mongoose = require('./dbConnect')
const productCodeSchema = mongoose.Schema(
    {
        productCode: String,
        idProduct: [{ type: String, ref: 'product' }],
    }, {
    collection: 'productCode'
})

let productCodeModel = mongoose.model('productCode', productCodeSchema)

module.exports = productCodeModel