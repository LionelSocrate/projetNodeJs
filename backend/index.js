const connectToMongoDb = require("./config/db");
connectToMongoDb();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const { checkUser, requireAuth } = require("./middleware/auth.middleware");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.APP_URL;

app.use(cookieParser());

//jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`app is running at the port : ${port}`);
});
