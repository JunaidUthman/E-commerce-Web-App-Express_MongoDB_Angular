const Client = require('../models/client');
const express = require('express');
const router = express.Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const JWT_SECRET = process.env.JWT_SECRET;
// Replace with your secret key



// Configure nodemailer (use your email service credentials)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

router.post('/creatClient', async (req, res) => {

    const { email, password } = req.body;

    try {
        const existingClient = await Client.findOne({ email });
        if (existingClient) {
            return res.json({ message: 'Client already exists in the database.' , alreadyExists: true });
        }

        const newClient = new Client({ email, password });
        await newClient.save();

        const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1d' });
        console.log(`Verification token: ${token}`);

        // Verification link
        const verificationLink = `http://localhost:3000/verify-email?token=${token}`;
        console.log(`Verification link: ${verificationLink}`);

        // Send verification email
        await transporter.sendMail({
            from: '"E-Commerce App" <your_email@gmail.com>',
            to: email,
            subject: 'Verify your email',
            html: `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`
        });

        res.json({ message: 'User created successfully. Verification email sent.', email });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Email verification route
router.get('/verify-email', async (req, res) => {
    const { token } = req.query;
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const client = await Client.findOne({ email: decoded.email });
        if (!client) {
            return res.status(400).json({ message: 'Invalid token or user does not exist.' });
        }
        client.isVerified = true;
        await client.save();
        res.send('Email verified successfully!');
    } catch (error) {
        res.status(400).send('Invalid or expired token.');
    }
});

router.post('/creatClient', async (req, res) => {
    const {email, password} = req.body;

    try {
        // Check if user already exists
        const existingClient = await Client.findOne({ email });
        if (existingClient) {
            return res.status(400).json({ message: 'Client already exists in the database.' });
        }

        // Create and save new client
        const newClient = new Client({
            email,
            password
        });

        await newClient.save();
        res.json({ message: 'User created successfully.', email });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

router.post('/logClient', async (req, res) => {
    const { email, password } = req.body;
    try {
        const client = await Client.findOne({ email });
        if (!client) {
            return res.json({ success: false, message: 'User not found.' });
        }
        if (client.password !== password) { // For production, use bcrypt!
            return res.json({ success: false, message: 'Incorrect password.' });
        }
        if (!client.isVerified) {
            return res.json({ success: false, message: 'Please verify your email before logging in.' });
        }
        // Issue JWT
        const token = jwt.sign(
            { id: client._id, email: client.email, role: client.role },
            JWT_SECRET,
            { expiresIn: '1d' }
        );
        res.json({ success: true, token, message: 'Login successful.' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
});

module.exports = router;