// STRINGS ROUTES *******************************************
const express = require('express');
const { sayHello } = require('./lib/strings');
const { uppercase } = require('./lib/strings');
const { lowercase } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');

// NUMBERS ROUTES *******************************************
const { add } = require('./lib/numbers');

const app = express();

// STRINGS ROUTES *******************************************
app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const n = req.query.length;

  res.status(200);

  if (n) {
    res.json({ result: firstCharacters(req.params.string, n) });
  } else {
    res.json({ result: firstCharacter(req.params.string) });
  }
});

// NUMBERS ROUTES *******************************************

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.status(200).json({ result: add(a, b) });
});

module.exports = app;
