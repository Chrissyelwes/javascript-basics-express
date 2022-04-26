// STRINGS ROUTES *******************************************
// **********************************************************
const express = require('express');
const req = require('express/lib/request');

// STRINGS ROUTES *******************************************
// **********************************************************
const { sayHello } = require('./lib/strings');
const { uppercase } = require('./lib/strings');
const { lowercase } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');

// NUMBERS ROUTES *******************************************
// **********************************************************
const { add } = require('./lib/numbers');
const { subtract } = require('./lib/numbers');
const { multiply } = require('./lib/numbers');
// const { divide } = require('./lib/numbers');
// const { remainder } = require('./lib/numbers');

const app = express();
app.use(express.json());

// STRINGS ROUTES *******************************************
// **********************************************************
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
// **********************************************************
app.get('/numbers/add/:a/and/:b', (req, res) => {
  // eslint-disable-next-line radix
  const a = parseInt(req.params.a);
  // eslint-disable-next-line radix
  const b = parseInt(req.params.b);

  // Make it short
  if (Number.isNaN(a, b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(a, b) });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  // eslint-disable-next-line radix
  const a = parseInt(req.params.a);
  // eslint-disable-next-line radix
  const b = parseInt(req.params.b);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: subtract(-a, -b) });
});

app.post('/numbers/multiply', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  // make it short with ternary
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
    // eslint-disable-next-line radix
  } else if (Number.isNaN(parseInt(a) || parseInt(b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(a, b) });
  }
});

module.exports = app;
