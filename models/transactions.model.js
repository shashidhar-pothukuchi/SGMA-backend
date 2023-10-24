const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    itemid: {type : mongoose.Schema.Types.ObjectId, ref: 'inventories'},
    quantity: {type: Number,required: true},
    updatedQuantity: {type: Number, required: true},
    type: {type: String},
    
},{
    timestamps: true
});

module.exports = mongoose.model('Transactions',transactionSchema);