const bcrypt = require('bcrypt');
const UserSchema = require("../model/UserSchema.js")

const createUser=async(req,res)=>{

    try {

        const {name,email,password} = req.body

        const saltRounds = 10

        let hashedPassword = ""

        bcrypt.hash(password, saltRounds, async(error,hash)=>{

            if(error){
                res.send(error.message)
            }

            hashedPassword = hash

            const user = UserSchema({name,email,password:hashedPassword})
            
            await user.save()

            res.send("User created!")

        })
        
    }catch (error) {
        res.send(error.message)
    }
}




module.exports = createUser
