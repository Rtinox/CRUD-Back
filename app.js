var express = require('express');
var path = require('path');

const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('Connected to MongoDB');
}


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes import
var usersRoute = require('./routes/users');

// Routes uses
app.use('/users', usersRoute);

module.exports = app;