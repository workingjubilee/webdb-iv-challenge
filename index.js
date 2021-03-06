const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const db = require("./data/index.js")

const server = express();

const port = process.env.PORT || 5000;

server.listen(port, () =>
  console.log(`\n** Recipes server running! **\n`)
);