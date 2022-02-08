const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Welcome to the neo surveys app 🚀');
});

module.exports = router;