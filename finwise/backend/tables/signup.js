const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phonenumber: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true }
});

const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;
