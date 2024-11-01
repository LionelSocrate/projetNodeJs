const userModel = require("../models/user.models");
const ObjectID = require("mongoose").Types.ObjectID;

//get all users

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find().select("-password");
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

//get user info

module.exports.userInfo = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//update user

module.exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userModel.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const updateUser = await userModel.findById(id).select("-password");
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
