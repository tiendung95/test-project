var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Trang home' });
});

/* GET about page. */
router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'Trang about' });
});


/* GET post page. */
router.get('/post.html', function(req, res, next) {
  res.render('post', { title: 'Trang post' });
});


/* GET contact page. */
router.get('/contact.html', function(req, res, next) {
  res.render('contact', { title: 'Trang contact' });
});

module.exports = router;
