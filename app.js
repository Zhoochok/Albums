require('@babel/register');

const express = require('express');
const app = express();
const PORT = 4000;
const indexRouter = require('./routes/index.router');
const serverConfig = require('./config/serverConfig');

serverConfig(app);

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Serever has been started!`);
});
// KAMIL ANTIHAIP