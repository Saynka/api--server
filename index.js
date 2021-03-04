"use strict";

// mongoose is the connector between our app and the MongoDB database
const mongoose = require("mongoose");
const server = require("./src/server.js");
const PORT = process.env.PORT || 3333;
const MONGODB_URI = "mongodb://localhost:27017/api-server";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(MONGODB_URI, options).then(() => {
  server.start(PORT);
});

// CLARITY!
// MONGODB is the DBMS
// mongoose is the ORM -> connector between our app and MongoDB