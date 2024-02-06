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

    // nodemailer code

    return res.json({ status: true, message: "Email sent successfully!" });
});