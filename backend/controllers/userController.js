const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body(); //extracting info from body

  //invalid inputs
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  //Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exits");
  }

  //Hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create the user
  const user = await User.create({ name, email, password: hashedPassword });
  if (user) {
    res.status(201).json({ _id: user.id, name: user.name, email: user.email });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User Data Display" });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body();

  //finding the user
  const user = await User.findOne({ email });

  //Check for password
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({ _id: user.id, name: user.name, email: user.email });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

module.exports = { registerUser, getMe, loginUser };
