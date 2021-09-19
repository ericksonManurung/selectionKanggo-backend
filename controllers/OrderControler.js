const { OrderTransaction, MasterProduct } = require('../models')

class OrderController {

    static getOrder (req,res,next) {
        OrderTransaction.findAll({where:{UserId: req.UserId}})
        .then((order) => {
            res.status(200).json({success: true, data: order})
        }).catch((err) => {
            console.log(err)
            next(err)
        });
    }

    static postOrder (req,res,next) {
        const {MasterProductId, amount} = req.body
        MasterProduct.findAll({where:{id:MasterProductId}})
        .then((product) => {
            const qty = product[0].dataValues.qty
            if(qty < amount){
                throw{ name: "STOCK_NOT_ENOUGH"}
            }
            return OrderTransaction.create({MasterProductId, amount, status:"pending", UserId: req.UserId})
        }).then((order) => {
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