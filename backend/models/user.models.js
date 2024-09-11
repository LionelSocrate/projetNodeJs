const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  pseudo: {
    type: String,
    minlength: 3,
    max: 55,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    max: 1024,
  },
  picture: {
    type: String,
    default: "./uploads/profil/user1.png",
  },
  likes: {
    type: [String],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Errow("incorrect password");
  }
  throw Errow("incorrect email");
};

module.exports = mongoose.models.users || mongoose.model("user", userSchema);
