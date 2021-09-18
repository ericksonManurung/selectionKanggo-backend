const { User, OrderTransaction } = require('../models')
const jwt = require('jsonwebtoken')

const authentication = (req,res,next) => {
    if (!req.headers.access_token) {
        console.log('missiong access token')    
    }else{
        try{
            const decode = jwt.verify(req.headers.access_token, process.env.JWT_SECREAT)
            req.user_id = decode.id
        }catch(err){
            console.log("access not valid")
        }

        User.findByPk(req.user_id)
        .then((user) => {
            if(!user){
                console.log('missing User')
            }
            next()
        }).catch((err) => {
            consol.log(err)
            next(err)
        });
    }
}


const authorizationOrder = (req,res,next) => {
    const {id} = req.params
    
    OrderTransaction.findOne({where:{id, user_id: req.user_id}})
    .then((order) => {
        if(!order){
            console.log("data tidak di temukan")
        }else{
            req.order = order
            next()
        }
    }).catch((err) => {
        console.log(err)
        next(err)
    });
}

module.exports = { authentication, authorizationOrder }