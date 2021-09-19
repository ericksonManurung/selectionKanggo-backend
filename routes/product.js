const routes = require('express').Router()
const ProductControllers = require('../controllers/ProductControllers')
const { authorizationProduct } = require('../middlewares/auth')

routes.get('/', ProductControllers.getProduct)
routes.post('/', ProductControllers.postProduct)
routes.put('/:id', authorizationProduct, ProductControllers.putProduct)
routes.delete('/:id', authorizationProduct, ProductControllers.deleteProduct)

module.exports = routes