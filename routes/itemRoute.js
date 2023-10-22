const express = require('express');
const router = express.Router()

router.get('/', async (req,res) => {
    console.log(`Item get request`);
    res.status(200).json({message: "Item card"});
})

module.exports = router