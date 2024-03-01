const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const getUser = require('../middleware/getUser');
const ssr = require('../middleware/ssr');
const { verifyAccessToken } = require('../middleware/verifyJWT');

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(ssr);
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(getUser);
  app.use(cookieParser());
  app.use(verifyAccessToken);
};

module.exports = serverConfig;
