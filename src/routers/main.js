const express = require('express');
const router = express.Router();
router.post('/moshaobu/user/login', (req, res, next) => {
    res.json({
        response: 'ok'
    });
})

module.exports = router;