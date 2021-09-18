const { OrderTransaction } = require('../models')

class OrderController {

    static getOrder (req,res,next) {
        OrderTransaction.findAll({where:{user_id: req.user_id}})
        .then((order) => {
            res.status(200).json({success: true, data: order})
        }).catch((err) => {
            console.log(err)
            next(err)
        });
    }

    static postOrder (req,res,next) {
        const {product_id, amount, status} = req.body
        OrderTransaction.create({product_id, amount, status, user_id: req.user_id})
        .then((order) => {
            res.status(201).json({data: order})
        }).catch((err) => {
            console.log(err)
            next(err)
        });
    }

    static deleteOrder (req,res,next) {
        const {id} = req.params
        OrderTransaction.destroy({where:{id}})
        .then((_) => {
            res.status(200).json({success:"true", message:"success delete Order"})
        }).catch((err) => {
            console.log(err)
            next(err)
        });
    }

}

module.exports = OrderController