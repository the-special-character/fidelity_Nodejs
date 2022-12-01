import express from "express";
import productsRoutes from "./routes/products.route";
import userRoutes from "./routes/user.route";
require("dotenv").config();

const app = express();

// app.use(express.json());

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "development") {
  console.log("check env...");
}

// routes
app.get("/", (req, res) => {
  res.send("Hello express");
});

// Midleware
app.use("/user", userRoutes);

app.use("/products", productsRoutes);

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
