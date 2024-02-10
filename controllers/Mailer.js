const nodemailer = require("nodemailer")

const Mailer = async(req,res)=>{

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'manjindersingh3890@gmail.com',
            pass: 'whuptpguucxiphdi',
        },
        secure: true, 
    });
   
        const {from,to,password,subject, text } = req.body;

        const mailData = {
            from: from,
            to: to,
            password:password,
            subject: subject,
            text: text,
        }
    
        transporter.sendMail(mailData, (error, info) => {
            if (error) {
                return console.log(error);
            }
            res.status(200).send({ message: "Mail send", message_id: info.messageId});
        });
}
       

module.exports = Mailer

