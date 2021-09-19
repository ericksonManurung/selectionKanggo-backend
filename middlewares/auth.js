const { User, MasterProduct, OrderTransaction, Payment } = require('../models')
const jwt = require('jsonwebtoken')

const authentication = (req,res,next) => {
    
    // if without access token
    if (!req.headers.access_token) {
        throw{ name: "MISSING_ACCESS_TOKEN" }  
    }else{
        try{
            const decode = jwt.verify(req.headers.access_token, process.env.JWT_SECREAT)
            req.UserId = decode.id
        }catch(err){
            // access token valid or wrong
            throw{ name: "INVALID_ACCESS_TOKEN" } 
        }

        User.findByPk(req.UserId)
        .then((user) => {
            if(!user){
                throw{ name: "MISSING_USER" } 
            }
            next()
        }).catch((err) => {
            console.log(err)
            next(err)
        });
    }
}


const authorizationProduct = (req,res,next) => {
    const {id} = req.params
    MasterProduct.findOne({where:{id}})
    .then((product) => {
        if(!product){
            throw{ name: "DATA_NOT_FOUND"}
        }
        next()
    }).catch((err) => {
        console.log(err)
        next(err)
    });
}



const authorizationOrder = (req,res,next) => {
    const {id} = req.params
    OrderTransaction.findOne({where:{id, UserId: req.UserId}})
    .then((order) => {
        if(!order){
            throw{ name: "DATA_NOT_FOUND"}
        }
        req.order = order
        next()
    }).catch((err) => {
        console.log(err)
        next(err)
    });
}


const authorizationPayment = (req,res,next) => {
    const {id} = req.params
    OrderTransaction.findOne({where:{id, UserId: req.UserId}})
    .then((order) => {
        if(!order){
            throw{ name: "DATA_NOT_FOUND"}
        }
        next()
    }).catch((err) => {
        console.log(err)
        next(err)
    });

}

module.exports = { authentication, authorizationProduct, authorizationOrder, authorizationPayment }