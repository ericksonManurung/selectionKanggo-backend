const routes = require('express').Router()
const routesUser = require('./user')
const routesProduct = require('./product')
const routesOreder = require('./order')
const routesPayment = require('./payment')

const {authentication} = require('../middlewares/auth')

routes.get('/', (req,res,next) =>{
    res.send('hello world')
})

routes.use('/users', routesUser)
routes.use(authentication)

routes.use('/products', routesProduct)
routes.use('/orders', routesOreder)
routes.use('/payments', routesPayment)

module.exports = routes