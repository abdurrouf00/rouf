const express = require("express");
const cors = require("cors");
const passport = require("./config/passport");
const path = require("path");

const authRoutes = require("./router/authRoutes"); // যদি থাকে
const productRoutes = require("./router/productRoutes");
const contactRoutes = require("./router/contactRoutes"); // যদি থাকে
const messageRoutes = require("./router/messageRoute");  // যদি থাকে
const orderRoutes = require("./router/orderRoutes");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

// Static folder for image access
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Product API</h1>");
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500 - Server Error");
});

module.exports = app;
