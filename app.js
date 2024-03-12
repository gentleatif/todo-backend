const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const routes = require('./routes/Task');
app.use(routes);
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PWD}@cluster0.o0zy1.mongodb.net/todoDB`;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('db is connected');
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
