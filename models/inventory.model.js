const mongoose = require('mongoose');

const inventorySchema = mongoose.Schema({

    name:{ type: String, required: true },
    eid: {type : mongoose.Schema.Types.ObjectId, ref: 'entities'},
    quantity: {type: Number},
    defQuantity: {type: Number},
    expiry: {type: Date}
});

module.exports = mongoose.model('Inventory',inventorySchema);