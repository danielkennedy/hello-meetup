var express = require('express');
var router = express.Router();
var env = process.env;
if (!process.env.hasOwnProperty('VCAP_APPLICATION')) {
  process.env.VCAP_APPLICATION = {instance_index: 0};
}
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Welcome to the St. Louis Cloud Foundry Meetup!',
    index: process.env.CF_INSTANCE_INDEX || 0,
    addr:  process.env.CF_INSTANCE_ADDR  || '0.0.0.0'
  });
});

module.exports = router;
