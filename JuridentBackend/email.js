const nodemailer = require('nodemailer')
const { } = require("dotenv").config()

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    },
    pool: true
});

module.exports = transporter;