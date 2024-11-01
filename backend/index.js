const connectToMongoDb = require("./config/db");
connectToMongoDb();

const cors = require("cors");

const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const projetRoutes = require("./routes/projet.routes");
const villaRoutes = require("./routes/villa.routes");
const rdvRoutes = require("./routes/rdv.routes");
const reservationRoutes = require("./routes/reservation.routes");
const contactRoutes = require("./routes/contact.routes");

const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const { checkUser, requireAuth } = require("./middleware/auth.middleware");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
const port = process.env.APP_URL;

app.use(cookieParser());

//jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/projet", projetRoutes);
app.use("/api/villa", villaRoutes);
app.use("/api/rdv", rdvRoutes);
app.use("/api/reservation", reservationRoutes);
app.use("/api/contact", contactRoutes);

app.listen(port, () => {
  console.log(`app is running at the port : ${port}`);
});
