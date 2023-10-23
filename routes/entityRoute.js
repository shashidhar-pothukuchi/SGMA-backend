const express = require('express');
const router = express.Router()

const Entity = require("../models/entity.model")

router.get('/', async (req,res) => {
    console.log(`Entity list request`);

    const elist = await Entity.find()

    res.status(200).json(elist);
})

router.post('/add', async (req,res) => {
    console.log(`Entity add request ${req.body.name}`);
    if(!req.body.name || !req.body.image){
        res.status(400)
    }

    const entity = await Entity.create({
        name: req.body.name,
        imageURL: req.body.imageURL
    })
    res.status(200).json(entity);
})

router.delete('/:id', async (req,res) => {
    console.log(`Entity delete request ${req.params.id}`);

    const entity = await Entity.findById(req.params.id)
    if(!entity){
        res.status(400)
    }
    await entity.deleteOne()
    res.status(200).json(entity.name);
})

module.exports = router