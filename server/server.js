//server.js
'use strict'

const express = require('express');
const cors = require('cors');
const {mongoose} = require('./db/mongoose');
const {PollItem} = require('./models/pollitem');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const port = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

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
    .put((req, res) => {
        const id = mongoose.Types.ObjectId(req.body.id);
        const updateObj = req.body.updateObj;
        
        PollItem.findByIdAndUpdate(id, updateObj, {new: true}).then((pollitem) => {
            res.send({message: 'Poll updated with vote'});
        }, (e) => {
            res.status(400).send(e);
        });
    })
    

router.route('/pollitems/:userId')
    //retrieve all polls by the specified user
    .get((req, res) => {
        PollItem.find({author: req.params.userId}).then((pollitems) => {
            res.json(pollitems);
        }, (e) => {
            res.status(400).send(e);
        });
    });

router.route('/pollitems/singlepoll/:id')
    //retrieve poll with specific id
    .get((req, res) => {
        PollItem.findById(req.params.id).then((pollitem) => {
            res.json(pollitem);
        }, (e) => {
            res.status(400).send(e); 
        });
    })
    .delete((req,res) => {
        PollItem.remove({ _id: req.params.id }).then((pollitem) => {
            console.log(pollitem + ' removed');
        }, (e) => {
            res.status(400).send(e);
        })
    });

app.use('/api', router);

app.listen(port, () => {
    console.log(`api running on port ${port}`);
});
