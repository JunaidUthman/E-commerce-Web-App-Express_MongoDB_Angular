const mongoose = require('mongoose');
const Client = require('../models/client');

async function saveAdminAccount() {
    await mongoose.connect('mongodb://localhost:27017/e-commerceDB');

    const admin = new Client({
        fullName: 'Admin User',
        email: 'admin@admin.com',
        password: '1234', 
        role: 'Admin',
        isVerified: true,
        phoneNumber: '1234567890'
    });

    await admin.save();
    console.log('Admin account created!');
    mongoose.disconnect();
}

saveAdminAccount().catch(err => {
    console.error('Error creating admin:', err);
    mongoose.disconnect();
});