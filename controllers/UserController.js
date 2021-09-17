const { User } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {
    
    static register (req,res,next) {
        const {name, email, password} = req.body
        User.create({name, email, password})
        .then((_) => {
            res.status(201).json({success:true, message:"success register.."})
        }).catch((err) => {
            console.log(err)
            next(err)
        });
    }

    static login (req,res,next) {
        const {email, password} = req.body
        User.findOne({where:{email}})
        .then((user) => {
            if(user && bcrypt.compareSync(password, user.password)){
                const access_token = jwt.sign({id: user.id, name:user.name}, process.env.JWT_SECREAT)
                res.status(200).json({success:true, access_token})
            }else{
                console.log('gak ada bos')
            }
        }).catch((err) => {
            console.log(err)
            next(err)
        });
    }

}

module.exports = UserController