const dotenv = require('dotenv')
dotenv.config()

const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const userRoutes = require("./routes/userRoutes.js")
const mongoose = require("mongoose")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const port = process.env.PORT || 5000;

app.use("/apiv1",userRoutes)


const db = async()=>{
    try{
        await mongoose.connect("mongodb+srv://manjindersingh:1234@cluster0.wrgnfob.mongodb.net/Node_Mailer?retryWrites=true&w=majority")

        console.log("Database Connected!")
        
        app.listen(port, () => {
            console.log(`Server listening on port,http://localhost:${port}`);
        });

    }catch(error){
        console.log("Error : ",error.message)
    }
}

db()




