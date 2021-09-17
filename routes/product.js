const routes = require('express').Router()
const ProductControllers = require('../controllers/ProductControllers')

routes.get('/', ProductControllers.getProduct)
routes.post('/', ProductControllers.postProduct)
routes.put('/:id', ProductControllers.putProduct)
routes.delete('/:id', ProductControllers.deleteProduct)

module.exports = routes