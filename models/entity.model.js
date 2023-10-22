const mongoose = require('mongoose');

const schema = mongoose.Schema();

const entitySchema = new Schema({
    
    name:{
        type: String,
        required: true,
    },
    image:{
        type: Image
    }
});