const express = require('express');
const router = express.Router()

const Transaction = require("../models/transactions.model")
const Inventory = require("../models/inventory.model")

router.get('/', async (req,res) => {
    console.log(`Transactions request`);
    const transactions = await Transaction.find().sort({createdAt : -1})
    res.status(200).json(transactions);
})

router.post('/add', async (req,res) => {
    console.log(`Inventory item add request ${req.body.name}`);
    if(!req.body.itemid){
        res.status(400)
    }

    const item = await Inventory.findById(req.body.itemid)
    if(!item){
        res.status(400)
    }
    console.log(`Item found : ${item.name} `)
    const transaction = await Transaction.create({
        itemid: req.body.itemid,
        quantity: req.body.quantity,
        updatedQuantity: req.body.updatedQuantity,
        type: req.body.type
    })
    res.status(200).json(transaction);
})

module.exports = router