const express = require("express");
const bcrypt = require("bcrypt");
const Register = require("../tables/signup"); 
const Login = require("../tables/login"); 

const router = express.Router();

// Sign-Up Route
router.post("/signup", async (req, res) => {
  const { name, phoneNumber, username, email, password} = req.body;

  // Validate that all required fields are provided
  if (!name || !phoneNumber || !username || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if email or username already exists in the Register collection
    const existingUser = await Register.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: "Email or username already exists" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user details in the Register collection
    const newUser = new Register({
      name,
      phoneNumber,
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    // Save login details in the Login collection (only email and password for login validation)
    const loginDetails = new Login({
      email,
      password: hashedPassword,
    });
    await loginDetails.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
