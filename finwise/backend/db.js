const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const con = await mongoose.connect('mongodb+srv://SEteam4:SE%40team4@cluster0.a07su.mongodb.net/finwise');
        console.log(`Mongodb Connected`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;
