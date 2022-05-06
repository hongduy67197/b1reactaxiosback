const mongoose = require('./dbConnect');
const productSchema = mongoose.Schema(
    {
        idCatagories: [{ type: String, ref: "catagories" }],
        productName: String,
        productCode: String,
        Price: Number,
        Quality: Number,
        description: String,
        color: String,
        Size: String,
    }, {
    collection: 'product'
})

const productModel = mongoose.model('product', productSchema)

module.exports = productModel