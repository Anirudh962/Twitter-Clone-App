const mongoose = require("mongoose");
// Connecting to MongoDB database through mongoose.

mongoose.connect("mongodb://localhost:27017/twitterdb");

mongoose.connection.on("connected", () => {
  console.log("Database Connected");
});
mongoose.connection.on("error", (error) => {
  console.log("Some error occurred while connecting to the database", error);
});
