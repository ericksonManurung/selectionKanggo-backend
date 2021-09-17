const routes = require('express').Router()
const OrderController = require('../controllers/OrderControler')

routes.get('/', OrderController.getOrder)
routes.post('/', OrderController.postOrder)

module.exports = routes