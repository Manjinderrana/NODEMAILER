
const UserSchema = require("../model/UserSchema.js")

const getUser=async(req,res)=>{

    try {
        const email = req.body.email
        const user = await UserSchema.findOne({email:email})
        res.send(user)
        
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = getUser



