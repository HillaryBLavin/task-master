var express = require('express');
var router = express.Router();
var task = require('../models/task.js');

router.get('/', function(req, res) {
    task.all(function(task_data) {
        console.log(task_data);
        res.render('index', {task_data});
    });
    
});

router.put('/tasks/update', function(req, res) {
    task.update(req.body.task_id, function(result) {
        console.log(result);
        res.redirect('/');
    });
});

router.post('/tasks/create', function(req, res) {
    task.create(req.body.task_name, function(result) {
        res.redirect('/');
    });
});

module.exports = router;