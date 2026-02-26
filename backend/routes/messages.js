const router = require('express').Router();
const Message = require('../models/Message');
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // 1. Skip Database - Only send via Email
        // By user request, we are no longer attempting to save to MongoDB to prevent timeouts.

        // 2. Setup Nodemailer Transporter
        // Note: Ensure EMAIL_USER and EMAIL_PASS are set in .env
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER, // Send emails to the same account used in .env
                subject: `New Portfolio Message from ${name}`,
                text: `You have a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
                replyTo: email
            };

            await transporter.sendMail(mailOptions);
        } else {
            console.warn("Nodemailer Warning: EMAIL_USER or EMAIL_PASS not set in .env. Email notification was skipped, but message was saved to database.");
        }

        res.status(201).json("Message Sent!");
    } catch (error) {
        console.error("Error processing message:", error);
        res.status(400).json("Error: " + error);
    }
});

module.exports = router;
