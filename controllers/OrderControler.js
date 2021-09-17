class OrderController {

    static getOrder (req,res,next) {
        res.send('getOrder')
    }

    static postOrder (req,res,next) {
        res.send('postOrder')
    }
}

module.exports = OrderController