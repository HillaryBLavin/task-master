var express = require('express');
var router = express.Router();
var task = require('../models/burger.js');

router.get('/', function(req, res) {
    task.all(function(task_data) {
        console.log(task_data);
        res.render('index');
    })
    
})

module.exports = router;