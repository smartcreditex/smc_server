'use strict';
var express = require('express');

module.exports = function (app) {
  var ethtransaction = require('../controllers/ethtransaction');
  var configcontroller = require('../controllers/configcontroller');

  app.route('/transaction/:from/:to')
    .get(ethtransaction.do_transaction);

    app.route('/count')
    .get(ethtransaction.do_count);

    app.route('/arrived')
    .get(ethtransaction.do_arrived);

    app.route('/delivered')
    .get(ethtransaction.do_delivered);

    app.route('/config.js')
    .get(configcontroller.createConfig);

  // static sites
  app.use(express.static('css'));
  app.use(express.static('images'));
  app.use(express.static('fonts'));
  app.use(express.static('data'));
  app.use(express.static('js'));
  app.use(express.static('pages'));
  app.use(express.static('node_modules'));

  app.use('/css', express.static('css'));
  app.use('/images', express.static('images'));
  app.use('/fonts', express.static('fonts'));
  app.use('/data', express.static('data'));
  app.use('/js', express.static('js'));
  app.use('/pages', express.static('pages'));
  app.use('/node_modules', express.static('node_modules'));
  app.use('/', express.static('pages/index.html'));
  app.use('/logo.png', express.static('logo.png'));
};
