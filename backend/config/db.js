const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/socialMedia";

const connectToMongoDb = () => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log("Connect toMongoDB"))
    .catch((error) => console.log("connection failed  ", error));
};

module.exports = connectToMongoDb;
