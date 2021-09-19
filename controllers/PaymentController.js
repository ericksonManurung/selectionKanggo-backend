const { OrderTransaction, User, MasterProduct, Payment } = require('../models')

class PaymentController {

    static postPayment (req,res,next) {
        const {id} = req.params
        let lastQty = 0
        let amount = 0
        let qty = 0
        const status = 'paid'

        OrderTransaction.findAll({include:[User, MasterProduct], where:{id}})
        .then((order) => {
            if(order[0].dataValues.status === "paid"){
                throw{ name:"NO_PENDING_ORDER" }
            }
            lastQty = order[0].MasterProduct.qty
            amount = order[0].dataValues.amount
            qty = lastQty - amount
            let masterProductId = order[0].dataValues.MasterProductId
            return MasterProduct.update({qty},{where:{id:masterProductId}})
        })
        .then((payment) => {
            // update order status
            return OrderTransaction.update({status}, {where:{id},returning:true})
        }).then((data) => {
            // insert table payment
            return Payment.create({ order_id: id, amount, status })
        }).then((data) => {
            // insert table payment
            res.status(200).json({succes:true, message:"proccess payment success",data})
        }).catch((err) => {
            console.log(err)
            next(err)
        });
    }
}

module.exports = PaymentController