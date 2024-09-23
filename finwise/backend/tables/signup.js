const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Register Schema
const registerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: {ype: String, required: true, unique: true},
  password: { type: String, required: true }
});

const Register = mongoose.model('Register', registerSchema);