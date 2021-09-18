const routes = require('express').Router()
const OrderController = require('../controllers/OrderControler')
const { authorizationOrder } = require('../middlewares/auth')

routes.get('/', OrderController.getOrder)
routes.post('/', OrderController.postOrder)
routes.delete('/:id', authorizationOrder, OrderController.deleteOrder)

module.exports = routes