const express = require('express');
const router = express.Router();

const fs = require('fs');

const path = require('path');

const helpers = require('../lib/helpers');

const pool = require('../config/conexiondb');

const { isLoggedIn,noNeedSeeIfyouLogIn } = require('../lib/auth');

const verifyToken = require('../lib/verifyToken');
const { render } = require('timeago.js');


//,verifyToken
router.get("/",isLoggedIn,async(req, res)=>{

    const user = req.user;


    res.render('index');
});


module.exports = router;