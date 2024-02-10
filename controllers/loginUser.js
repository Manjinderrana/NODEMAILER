const bcrypt =require('bcrypt')

const UserSchema = require("../model/UserSchema")

const loginUser = async(req,res)=>{
   try {
    const {email,password} = req.body
    const user = await UserSchema.findOne({email:email})
    if (user) {
        bcrypt.compare(password,user.password,(error,result)=>{
             if (error) {
                res.send(error)
            }else if(result){
                res.send("user verified successfully!")
            }else{
                res.send("wrong password")
            }
        })
        
    }else{
        res.send("email not valid")
    }
   } catch (error) {
    res.send(error)
   }
}

module.exports = loginUser


