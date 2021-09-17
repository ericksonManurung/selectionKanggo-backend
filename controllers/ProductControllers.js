const { MasterProduct } = require('../models')

class ProductControllers {

    static getProduct (req,res,next) {
        MasterProduct.findAll()
        .then((data) => {
            res.status(200).json({product:data})
        }).catch((err) => {
            console.log(err)
            next(err)
        });
    }

    static postProduct (req,res,next) {
        const {name, price, qty} = req.body
        MasterProduct.create({name, price, qty})
        .then((data) => {
            res.status(201).json({success:"true", product:data})
        }).catch((err) => {
            console.log(err)
            next(err)
        });
    }

    static putProduct (req,res,next) {
        const {id} = req.params
        const {name, price, qty} = req.body
        MasterProduct.update({name, price, qty}, {where:{id}, returning:true})
        .then((data) => {
            res.status(200).json({success:"true", product:data[1][0]})
        }).catch((err) => {
            console.log(err)
            next(err)
        });
    }

    static deleteProduct (req,res,next) {
        const {id} = req.params
        MasterProduct.destroy({where:{id}})
        .then((data) => {
            res.status(200).json({success:"true", message:"success delete data"})
        }).catch((err) => {
            console.log(err)
            next(err)
        });
    }

    
}

module.exports = ProductControllers