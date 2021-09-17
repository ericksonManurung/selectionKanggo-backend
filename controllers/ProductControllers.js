class ProductControllers {

    static getProduct (req,res,next) {
        res.send('getProduct')
    }

    static postProduct (req,res,next) {
        res.send('postProduct')
    }

    static putProduct (req,res,next) {
        res.send('putProduct')
    }

    static deleteProduct (req,res,next) {
        res.send('deleteProduct')
    }

    
}

module.exports = ProductControllers