const express = require('express');
const User = require('../models/user_model');
const router = express.Router();
router.post('/add', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json({ message:  "Registered Successfully" });
    } catch (error) {
        res.status(404).send(error);
    }

})

router.get('/add', function(req, res, next){
    res.render('user',{title: 'Add user'});
})

module.exports = router;