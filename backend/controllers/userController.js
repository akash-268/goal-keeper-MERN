const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

const getMe = (req, res) => {
  res.json({ message: "User Data Display" });
};

const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

module.exports = { registerUser, getMe, loginUser };
