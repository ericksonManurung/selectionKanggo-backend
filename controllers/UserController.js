const { User } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validateEmail} = require('../helpers/emaliValidate')

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
        
        // if name or password Null
        if(!email || !password){
            throw{name: 'LOGIN_VALIDATION'}
        }

        // validation length password
        if(password.length < 8){
            throw{name: "FORMAT_PASSWORD_FALSE"}
        }

        // validation format email
        if(!validateEmail(email)){
            throw{name: "FORMAT_EMAIL_FALSE"}
        }
        
        
        User.findOne({where:{email}})
        .then((user) => {
            if(user && bcrypt.compareSync(password, user.password)){
                const access_token = jwt.sign({id: user.id, name:user.name}, process.env.JWT_SECREAT)
                res.status(200).json({success:true, access_token})
            }else{
                // username null or password false
                throw{ name: "LOGIN_FAIL" }
            }
        }).catch((err) => {
            console.log(err)
            next(err)
        });
    }

}

module.exports = UserController