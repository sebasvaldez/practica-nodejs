const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { config } = require("dotenv");
config();

const bookRoutes = require("./routes/book.routes");

//usamos express para los middleware
const app = express();

app.use(bodyParser.json());
//Conectamos la base de datos
// mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME });
// const db = mongoose.connection;

mongoose.connect(process.env.MONGO_URL, {
  dbName: process.env.MONGO_DB_NAME,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to the database");
});

app.use("/books", bookRoutes);

//voy en el minuto 3:11:00

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
