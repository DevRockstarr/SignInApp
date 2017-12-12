var express = require('express');
var router = express.Router();
var User = require('../models/User')
var path=  require('path')
/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index');
  // res.render('./index.html')
  res.sendFile(__dirname +'/../public/index.html')
  // res.write(__dirname)
});

router.get('/checklogin', function (req, res) {

  if (req.session.user) {
    res.json({
      success: true
    })
  }
  else {
    res.status(400).json({
      success: false
    })
  }

});

router.post('/signup', function (req, res) {

  User.create(req.body)
    .then(user => {
      res.json({
        success: true
      })
    })
    .catch(err => {
      res.status(400).json({
        success: err
      })
    })
});

router.post('/admin', function (req, res) {

  User.find({})
    .then(users => {
      user = users[0]
      if (user.email==req.body.email) {
        if (user.password==req.body.password) {
          req.session.user = user
          res.json({
            success: true
          })
        }
        else {
          res.status(402).json({
            success: false,
            message: 'incorrect password'
          })
        }
      }       
      else {
        res.status(401).json({
          success: false,
          message: 'no admin'
        })
      }
    })
    .catch(err => {
      res.status(400).json({
        success: false
      })
    })
})

router.post('/login', function (req, res) {
  
    User.findOne({
      email: req.body.email,
      password: req.body.password
    })
      .then(user => {
        if (user) {
          req.session.user = user
          res.json({
            success: true
          })
        } else
          res.status(400).json({
            success: false,
            message: 'can not find the user'
          })
      })
      .catch(err => {
        res.status(400).json({
          success: false
        })
      })
  })


router.get('/users', function (req, res) {  
  User.find({})
  .then(users => {
    res.json({
      users: users 
    }) 
  })
  .catch(err => {
    res.status(400).json({
      success: false
    })
  })
})
module.exports = router;
