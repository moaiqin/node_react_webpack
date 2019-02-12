const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index',{
        data:JSON.stringify({
            prefix:'moshaobu.com/',
            prefixAPI:'/api/'
        })
    });
})

module.exports = router;