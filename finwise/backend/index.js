//mongodb+srv://SEteam4:<db_password>@cluster0.a07su.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express =  require('express')
const connectDB = require('./db.js')
const signupRoutes = require('./tables/signup');
const loginRoutes = require('./tables/login');

const app = express()

connectDB()

app.listen(3002, () => {
    console.log("app is running");
})