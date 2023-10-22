const express = require('express');
const cors = require('cors');
mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port =  process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection successful");
})

app.use('/item', require('./item'))

app.listen(port, () => {
    console.log(`Server is running on the port : ${port}`);

});

