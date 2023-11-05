const express = require("express");
const cors = require("cors");
mongoose = require("mongoose");
const colors = require("colors");

require("dotenv").config();

//Routes import
const entityRoute = require("./routes/entityRoute");
const itemRoute = require("./routes/itemRoute");
const transactionRoute = require("./routes/transactionRoute");
const userRoute = require("./routes/userRoute");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const uri = process.env.ATLAS_URI;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(
      `MongoDB connection successful ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();

app.use("/item", itemRoute);
app.use("/entity", entityRoute);
app.use("/transactions", transactionRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Server is running on the port : ${port}`);
});
