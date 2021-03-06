const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/readAll', ProductController.readAll);
    app.get('/api/readOne/:id', ProductController.readOne);
    app.delete('/api/product/:id', ProductController.deleteProduct);
    app.put('/api/edit/:id', ProductController.updateProduct)


}