var express = require('express');
var router = express.Router();
var users = {
    'users' : [
        {
            'id' : 1,
            'name' : 'elmer'
        },
        {
            'id' : 2,
            'name' : 'pelmer'
        },
        {
            'id' : 3,
            'name' : 'selmer'
        },
        {
            'id' : 4,
            'name' : 'delmer'
        },
        {
            'id' : 5,
            'name' : 'velmer'
        },
        {
            'id' : 6,
            'name' : 'helmer'
        },
        {
            'id' : 7,
            'name' : 'lelmer'
        },
        {
            'id' : 8,
            'name' : 'nelmer'
        },
        {
            'id' : 9,
            'name' : 'welmer'
        },
        {
            'id' : 10,
            'name' : 'remle'
        },
    ]
};

router.get('/', function(req, res, next) {
  res.render('users', {title: 'Users!'});
  res.send(users.length);
});

router.post('/', function(req, res, next) {
    res.render('users', {title: 'Users!'});
    users.push(req);
});

router.delete('/', function(req, res, next) {
    res.render('users', {title: 'Users!'});
    users = users.filter((user) => user.id != req.id);
});

// send individual user
/*
router.get('/', function(req, res, next) {
    res.render('users', {title: 'Users!'});
    res.send(users);
  });
*/

module.exports = router;