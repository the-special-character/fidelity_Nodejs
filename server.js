import express from "express";
import cors from "cors";
// import productsRoutes from "./routes/products.route";
// import userRoutes from "./routes/user.route";
import db from "./db";
import authRouter from "./routes/auth.route";

require("dotenv").config();

const PORT = process.env.PORT || 3000;

db.connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Midleware
app.use("/auth", authRouter);
// app.use("/user", userRoutes);
// app.use("/products", productsRoutes);

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});

// const http = require("http");

// const hostname = "local";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
