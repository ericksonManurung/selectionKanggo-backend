const routes = require('express').Router()
const PaymentController = require('../controllers/PaymentController')

routes.patch('/:id', PaymentController.postPayment)

module.exports = routes