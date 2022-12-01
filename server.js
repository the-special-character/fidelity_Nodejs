const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "development") {
  console.log("check env...");
}

app.get("/", (req, res) => {
  res.send("Hello express");
});

app.get("/products", (req, res) => {
  res.send("products info");
});

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
