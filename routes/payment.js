const routes = require('express').Router()
const PaymentController = require('../controllers/PaymentController')
const { authorizationPayment } = require('../middlewares/auth')

routes.patch('/:id', authorizationPayment, PaymentController.postPayment)

module.exports = routes