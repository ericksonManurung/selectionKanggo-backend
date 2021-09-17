const routes = require('express').Router()
const PaymentController = require('../controllers/PaymentController')

routes.post('/', PaymentController.postPayment)

module.exports = routes