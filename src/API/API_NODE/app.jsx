const express = require('express');
const app = express();
const router = require('./router.jsx');
app.use(router);

module.exports =  app;
