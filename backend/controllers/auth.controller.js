const userModel = require("../models/user.models");
const bcrypt = require("bcrypt");
const maxAge = 3 * 24 * 60 * 60 * 1000;
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

//SIGNUP
module.exports.signUp = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    hassPassword = await bcrypt.hash(req.body.password, salt);

    const user = await userModel.create({
      nom: req.body.nom,
      email: req.body.email,
      picture: req.body.picture,
      password: hassPassword,
    });
    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

//LOGIN
module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ user: user._id });
  } catch (err) {
    res.status(400).send({ err });
  }
};

//LOGOUT

module.exports.logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
