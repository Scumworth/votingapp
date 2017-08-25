//models/pollitem.js
'use strict';

const {mongoose} = require('./../db/mongoose');
const Schema = mongoose.Schema;

const PollItemSchema = new Schema({
    author: String,
    text: String
});
    
module.exports = mongoose.model('PollItem', PollItemSchema);
