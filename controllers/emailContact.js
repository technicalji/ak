const emailSender = require("nodemailer");
const sendEmail = async (req, res) => {
    const {email, name, message} = req.body;
    try {
        let transporter = await emailSender.createTransport({
            host:process.env.EMAIL_HOST,
            auth:{
                user:process.env.EMAIL_USER_NAME,
                pass:process.env.EMAIL_USER_PASSWORD,
            }
        });
        let info = await transporter.sendMail({
            from:process.env.EMAIL_USER_NAME,
            to:process.env.EMAIL_RECIVER_USER_NAME,
            subject:"My portfolio message",
            text:"Contact by portfolio website",
            html:`<p>
                <h1>${name}</h1>
                <h2>${email}</h2>
                <h3>${message}</h3>
            </p>`,
        });
        return(
            res.status(201).json({
                message:"Message Send"
            })
        )
    } catch (error) {
        return(
            res.status(200).json({
                message:"Somethings went wrong"
            })
        )
    }
};
module.exports = {sendEmail};