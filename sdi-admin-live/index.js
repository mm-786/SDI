const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));
const path = require('path');
const router = express.Router();

app.use('/', router);

module.exports = app

