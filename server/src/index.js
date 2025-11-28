const app = require("./app.js");

const dotenv = require("dotenv");
const { connectDB, sequelize } = require("./config/db.js");

dotenv.config();

// handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught exception`);
  process.exit(1);
});

// This is database connection
connectDB();

// SYNC MODELS

sequelize
  .sync({ force: false, alter: false }) // Data will NOT be deleted
  .then(() => console.log("MYSQL CONNECTED SUCCESSFULLY"))
  .catch((err) => console.log("DB ERROR:", err));

// Start server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

// handle unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
