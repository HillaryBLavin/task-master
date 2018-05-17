var orm = require('../config/orm.js');

var task = {
    all: function(cb) {
        orm.all('tasks', function(res) {
            cb(res);
        })
    },
    update: function(id, cb) {
        orm.update('tasks', id, cb);
    }
}

module.exports = task;