//server.js
'use strict'

const express = require('express');
const cors = require('cors');
const {mongoose} = require('./db/mongoose');
const {PollItem} = require('./models/pollitem');
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

router.route('/pollitems')
    //retrieve all polls
    .get((req, res) => {
        PollItem.find().then((pollitems) => {
            res.json(pollitems);
        }, (e) => {
            res.status(400).send(e);
        });
    })
    //post new poll
    .post((req, res) => {
        const pollitem = new PollItem({
            author: req.body.author,
            pollTitle: req.body.pollTitle,
            description: req.body.description,
            options: req.body.options
        });
       pollitem.save().then((pollitem) => {
           res.send({message: 'Poll added.'});
       }, (e) => {
           res.status(400).send(e);
       });
    })


app.use('/api', router);

app.listen(port, () => {
    console.log(`api running on port ${port}`);
});
