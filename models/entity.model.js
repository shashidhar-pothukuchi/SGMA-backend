const mongoose = require('mongoose');

const entitySchema = mongoose.Schema({

    name:{ type: String, required: true },
    imageURL:{ type: String,
            }
});

module.exports = mongoose.model('Entity',entitySchema);