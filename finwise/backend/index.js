//mongodb+srv://SEteam4:<db_password>@cluster0.a07su.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express =  require('express');
const cors = require("cors");
const connectDB = require('./db');
const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');

const app = express()

app.use(cors());
app.use(express.json);

connectDB()

app.use("/api", signupRoutes);
app.use("/api", loginRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log("Server running");
});