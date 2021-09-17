const routes = require('express').Router()
const routesUser = require('./user')
const routesProduct = require('./product')

routes.get('/', (req,res,next) =>{
    res.send('hello world')
})

routes.use('/users', routesUser)
routes.use('/products', routesProduct)

module.exports = routes