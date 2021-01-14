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

