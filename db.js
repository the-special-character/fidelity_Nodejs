import mongoose from "mongoose";

const { connect, connection } = mongoose;

const URL = process.env.MONGODB_URL || "mongodb://localhost:27017/fidelity";

const defaultOptions = {
  connectTimeoutMS: 2000,
  keepAlive: true,
};

async function connectDB() {
  try {
    connection.on("connected", () => {
      console.log("Mongo Connection Established");
    });

    connection.on("reconnected", () => {
      console.log("Mongo Connection Reestablished");
    });

    connection.on("disconnected", () => {
      console.log("Mongo Connection Reestablished");
      setTimeout(async () => {
        await connect(URL, { ...defaultOptions, socketTimeoutMS: 3000 });
      }, 3000);
    });

    connection.on("close", () => {
      console.log("Mongo Connection closed");
    });

    connection.on("error", (error) => {
      console.log(error.message);
    });
    await connect(URL, defaultOptions);
  } catch (error) {}
}

export default {
  connectDB,
};
