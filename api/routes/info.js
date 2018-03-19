const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Info was fetched'
    });
});

router.post('/',(req,res,next) => {
    res.status(201).json({
        message: 'Info was created'
    });
});

router.get('/:orderId',(req,res,next) => {
    res.status(200).json({
        message: 'Info details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId',(req,res,next) => {
    res.status(200).json({
        message: 'Info delete',
        orderId: req.params.orderId
    });
});

module.exports = router;