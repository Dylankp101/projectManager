const { response } = require('express');
const { Product } = require('../models/product.models');
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createProduct = (request, response) => {
    const { title, price, desc } = request.body;
    Product.create({
            title,
            price,
            desc
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}
module.exports.readAll = (request, response) => {
    Product.find({})
    .then(product => response.json(product))
    .catch(error => response.json(error));
}

module.exports.readOne = (request, response) => {
    Product.findOne({_id:request.params.id})
    .then(data => response.json(data))
    .catch(error => response.json(error));
}
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}
