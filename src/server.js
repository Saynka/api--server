'use strict';


const express = require('express');
const logger = require('./middleware/logger.js');
const crudRoutesClothes = require('./routes/clothes.js')
const crudRoutesFood = require('./routes/food.js');
const notFoundHandler = require('./error-handlers/404.js');
const app = express();
const errorHandler = require('./error-handlers/500.js');



app.use(express.json());
app.use(logger);
app.use(crudRoutesClothes);
app.use(crudRoutesFood);

app.use('*', notFoundHandler);
app.use(errorHandler);



function start(port) {
  app.listen(port, () => {
      console.log(`connected to port ${port}`);
  });
}

module.exports = {
  app: app,
  start: start,
};