require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");

const User = require("./models/User.js");


app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
app.use(cookieParser());

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
}
  
main()
.then( () => console.log("MongoDB connection successful") )
.catch( (error) => console.log(error) );


app.listen(process.env.PORT, () => {
    console.log("Server is Running");
});


const verifyUser = (req, res, next) => {

    try {
        const token = req.cookies.token;
        if (!token) {
            return res.json({ status: false, message: "token does not exist!" })
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        next();

    } catch (error) {
        console.log(error);
        return res.json({ status: false, message: "Invalid Token!"+ error });
    }
};


app.get("/", verifyUser, (req, res) => {

    return res.json({ status: true, message: "Authorized!"});
});



app.post("/auth/signup", async (req, res) => {

    const { username, email, password } = req.body;

    const user = await User.findOne({email: email});
    if (user) {
        return res.json({ status: false, message: "user already exists!" })
    }
    const hash = await bcrypt.hash(password, 10);

    const newUser = new User({username, email, password: hash});
    await newUser.save();

    return res.json({ status: true, message: "record registered" });
});



app.post("/auth/signin", async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({email: email});
    if (!user) {
        return res.json({ status: false, message: "user does not exists!" })
    }

    const validHash = await bcrypt.compare(password, user.password);
    if (!validHash) {
        return res.json({ status: false, message: "password is incorrect!" });
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });

    return res.json({ status: true, message: "Signed in successfully!" });
});


app.post("/auth/forgotpassword", async (req, res) => {

    const { email } = req.body;

    const user = await User.findOne({email: email});
    if (!user) {
        return res.json({ status: false, message: "user does not exists!" })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "5m" });

    // nodemailer code
    const transporter = nodemailer.createTransport({
        service: process.env.SERVICE_FOR_NODEMAILER,
        auth: {
            user: process.env.EMAIL_FOR_NODEMAILER,
            pass: process.env.PASSWORD_FOR_NODEMAILER
        }
    });
    
    const encodedToken = encodeURIComponent(token).replace(/\./g, "%2E");   // to replace "." with URL encoding

    const mailOptions = {
        from: process.env.EMAIL_FOR_NODEMAILER,
        to: email,
        subject: "Reset Password",
        text: `http://localhost:5173/resetpassword/${encodedToken}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            return res.json({ status: false, message: "Email sent failed!" });
        } else {
            console.log('Email sent: ' + info.response);
            return res.json({ status: true, message: "Email sent successfully!" });
        }
    });

});


app.post("/auth/resetpassword/:token", async (req, res) => {

    try {
        const { token } = req.params;
        const { password } = req.body;

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const id = decodedToken.id;     // when we created jwt token, we have passed value of id as user_id
        
        const hash = await bcrypt.hash(password, 10);
        await User.findByIdAndUpdate({ _id: id }, { password: hash });

        return res.json({ status: true, message: "Password updated successfully!" });
        
    } catch (error) {
        console.log(error);
        return res.json({ status: false, message: "Invalid Token!"+ error });
    }
});


app.get("/auth/signout", (req, res) => {
    res.clearCookie("token");
    return res.json({ status: true, message: "Signed Out Successfully!"}); 
});