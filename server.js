const express = require('express');
const cors = require('cors');
mongoose = require('mongoose');

require('dotenv').config();

//Routes
const itemRoute = require('./routes/itemRoute');

const app = express();

const port =  process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection successful");
})

app.use('/item', itemRoute)

app.listen(port, () => {
    console.log(`Server is running on the port : ${port}`);

});

