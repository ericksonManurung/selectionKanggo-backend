if(process.env.NODE_ENV === 'development') require('dotenv').config() //open this if you want run in prod
// require('dotenv').config() //open this if you want run in development
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(routes)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`your server run at http://localhost:${port}`)
}) 