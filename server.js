//server.js
'use strict'

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const port = process.env.API_PORT || 3001;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


router.get('/', (req, res) => {
    res.json({ message: 'API Initialized!' });
});

app.use('/api', router);

app.listen(port, () => {
    console.log(`api running on port ${port}`);
});
