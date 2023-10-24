const express = require('express');
const router = express.Router()

const Entity = require("../models/entity.model")
const Inventory = require("../models/inventory.model")

router.get('/', async (req,res) => {
    console.log(`Item list request`);
    const items = await Inventory.find()
    res.status(200).json(items);
})


router.post('/add', async (req,res) => {
    console.log(`Inventory item add request ${req.body.name}.cyan.underline`);
    if(!req.body.name){
        res.status(400)
    }

    const entity = await Entity.findById(req.body.eid)
    if(!entity){
        res.status(400)
    }
    const item = await Inventory.create({
        name: req.body.name,
        eid: req.body.eid,
        quantity: 0,
        defQuantity: 0,
        expiry: Date.now()
    })
    res.status(200).json(item);
})

router.put('/:id', async (req,res) => {
    console.log(`Inventory item update request ${req.params.id}`);
    if(!req.params.id){
        res.status(400)
    }


    const updatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body,{new:true,})
    if(!updatedItem){
        res.status(400)
    }
    res.status(200).json(updatedItem);
})

router.delete('/:id', async (req,res) => {
    console.log(`Inventory item delete request ${req.params.id}`);
    if(!req.params.id){
        res.status(400)
    }

    const updatedItem = await Inventory.findById(req.params.id)
    if(!updatedItem){
        res.status(400)
    }
    updatedItem.deleteOne();
    res.status(200).json(updatedItem);
})



module.exports = router