//models/pollitem.js
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PollItemSchema = new Schema({
    pollTitle: { type: String, required: true }, 
    author: { type: String, required: true },
    description: { type: String },
    options: [{optionTitle: { type: String, lowercase: true, trim: true }, votes: Number }],
    voters: [{type: String}],
});

const PollItem = mongoose.model('PollItem', PollItemSchema);

module.exports = {PollItem};
