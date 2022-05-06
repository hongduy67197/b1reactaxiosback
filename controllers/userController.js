const productModel = require('../models/productSchema')
const productCodeModel = require('../models/productCodeSchema')
const userModel = require('../models/userSchema')
const cartsModel = require('../models/cartSchema')
const catagoriesModel = require('../models/catagoriesSchema')

exports.getListUser = async function (req, res) {
    try {
        let listUser = await userModel.find()
        res.json(listUser)
    } catch (error) {
        console.log(error);
    }
}

exports.getUser = async function (req, res) {
    try {
        let userSearch12 = await userModel.find({ _id: req.params.iduser })
        res.json(userSearch12)
    } catch (error) {
        console.log(error);
    }
}

exports.editUser = async function (req, res) {
    try {
        let updateUserinfo = await userModel.updateOne({
            _id: req.params.iduser
        }, {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            phone: req.body.phone,
            location: req.body.location,
        })
        res.json(updateUserinfo)
    } catch (error) {
        console.log(error);
    }
}

exports.register = async function (req, res) {
    try {
        let { password, email, username, phone, location } = req.body;
        let newUser = await userModel.create({
            username: username,
            password: password,
            email: email,
            phone: phone,
            location: location,
        })
        res.json(newUser);
    } catch (error) {
        console.log(error);
    }
}

exports.login = async function (req, res) {
    try {
        let { username, password } = req.body;
        let users = await userModel.findOne({ username })
        if (!users) {
            return res.json({ status: "khong tim thay user" })
        } else if (users.password != password) {
            return res.json({ status: "password khong thay" })
        } else if (users.password == password) {
            res.json({ user: users })
        }
    } catch (error) {
        console.log(error);
    }
}

exports.getListCatagories = async function (req, res) {
    try {
        let listCatagories = await catagoriesModel.find()
        res.json(listCatagories)
    } catch (error) {
        console.log(error);
    }
}

exports.createCatagories = async function (req, res) {
    try {
        let { catagoriesName } = req.body;
        let searchCatagories = await catagoriesModel.findOne({
            catagoriesName: catagoriesName
        })
        console.log(86, searchCatagories);
        if (searchCatagories) {
            res.json("da co phan loai nay")
        } else {
            let newCatagories = await catagoriesModel.create({
                catagoriesName: catagoriesName
            })
            res.json({ mess: "tao moi thanh cong", newCatagories })
        }
    } catch (error) {
        console.log(error);
    }
}

exports.updateCatagories = async function (req, res) {
    try {
        let updateCatagories = await catagoriesModel.updateOne(
            { _id: req.params.idCatagories },
            {
                catagoriesName: req.body.catagoriesName,
            }
        )
        res.json(updateCatagories)
    } catch (error) {
        console.log(error);
    }
}

exports.deleteCatagories = async function (req, res) {
    try {
        let deleteCatagories = await catagoriesModel.deleteOne(
            { _id: req.params.idCatagories }
        )
        res.json(deleteCatagories)
    } catch (error) {
        console.log(error);
    }
}

exports.searchProduct = async function (req, res) {
    try {
        let searchProductList = await productModel.find({
            productName: { $regex: `.*${req.query.search}*` }
        })
        res.json(searchProductList)
    } catch (error) {
        console.log(error);
    }
}

exports.getListProduct = async function (req, res) {
    try {
        let product = await productModel.find()
        console.log(141, product);
        res.json({ product })
    } catch (error) {
        console.log(error);
    }
}

exports.getProductId = async function (req, res) {
    try {
        let ProductId = await productModel.find({ _id: req.params.idProduct })
        res.json(ProductId)
    } catch (error) {
        console.log(error);
    }
}

exports.getListProductCode = async function (req, res) {
    try {
        let listProductCode = await productCodeModel.find()
        res.json(listProductCode)
    } catch (error) {
        console.log(error);
    }
}

exports.createProductAndProductCode = async function (req, res) {
    try {
        let newProductCode = await productCodeModel.create({
            productCode: req.body.productCode
        })
        let newProduct = await productModel.create({
            idCatagories: req.body.idCatagories,
            productName: req.body.productName,
            productCode: newProductCode.productCode,
            Price: req.body.Price,
            Quality: req.body.Quality,
            description: req.body.description,
            color: req.body.color,
            Size: req.body.Size,
        })
        res.json(newProduct)
    } catch (error) {
        console.log(error);
    }
}

exports.createProductCode = async function (req, res) {
    try {
        let searchProductCode = await productCodeModel.find({ productCode: req.body.productCode })
        if (searchProductCode) {
            res.json("da co product code nay")
        } else {
            let createProductCode = await productCodeModel.create({
                productCode: req.body.productCode
            })
            res.json(createProductCode)
        }
    } catch (error) {
        console.log(error);
    }
}

exports.updateProductCode = async function (req, res) {
    try {
        let updateProductCode = await productCodeModel.updateOne({
            _id: req.params.idProductCode,
        }, {
            productCode: req.body.productCode,
            // idProduct: req.body.idProduct
        })
        res.json(updateProductCode)
    } catch (error) {
        console.log(error);
    }
}

exports.deleteProductCode = async function (req, res) {
    try {
        let deleteProductCode = await productCodeModel.deleteOne({
            _id: req.params.idProductCode
        })
        res.json(deleteProductCode)
    } catch (error) {
        console.log(error);
    }
}

exports.createProduct = async function (req, res) {
    try {
        let newProduct = await productModel.create({
            idCatagories: req.body.idCatagories,
            productName: req.body.productName,
            productCode: req.body.productCode,
            Price: req.body.Price,
            Quality: req.body.Quality,
            description: req.body.description,
            color: req.body.color,
            Size: req.body.Size,
        })
        res.json(newProduct)
    } catch (error) {
        console.log(error);
    }
}

exports.updateProduct = async function (req, res) {
    try {
        let updateProduct = await productModel.updateOne(
            { _id: req.params.idProduct },
            {
                idCatagories: req.body.idCatagories,
                productName: req.body.productName,
                productCode: req.body.productCode,
                Price: req.body.Price,
                Quality: req.body.Quality,
                description: req.body.description,
                color: req.body.color,
                Size: req.body.Size,
            }
        )
        res.json(updateProduct);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteProduct = async function (req, res) {
    try {
        let deleteProduct = await productModel.deleteOne({
            _id: req.params.idProduct
        })
        res.json(deleteProduct)
    } catch (error) {
        console.log(error);
    }
}

exports.getListCart = async function (req, res) {
    try {
        let listCart = await cartsModel.find()
        res.json(listCart)
    } catch (error) {
        console.log(error);
    }
}

exports.selectCart = async function (req, res) {
    try {
        let idCart = req.params.idCart
        let searchCart = await cartsModel.find({
            _id: idCart
        })
        res.json(searchCart)
    } catch (error) {
        console.log(error);
    }
}

exports.createCart = async function (req, res) {
    try {
        let idProduct = req.body.idProduct
        let quantity = req.body.quantity
        let cartsPrice = req.body.cartsPrice
        let idUser = req.body.idUser
        let createCarts = await cartsModel.create({
            listProduct: [{ idproduct: idProduct, quantity: quantity }],
            cartsPrice: cartsPrice,
            idUser: idUser,
        })
        res.json(createCarts)
    } catch (error) {
        console.log(error);
    }
}

exports.editCart = async function (req, res) {
    try {
        let updateCart = await cartsModel.updateOne({
            _id: req.params.idCart
        }, {
            listProduct: [{ idProduct: req.body.idProduct, quantity: req.body.quantity }],
            cartsPrice: req.body.cartsPrice,
        })
        res.json(updateCart)
    } catch (error) {
        console.log(error);
    }
}

exports.deleteCart = async function (req, res) {
    try {
        let clearCart = await cartsModel.deleteOne({
            _id: req.params.idCart
        })
        res.json(clearCart)
    } catch (error) {
        console.log(error);
    }
}
