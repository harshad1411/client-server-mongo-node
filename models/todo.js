const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const todoSchema = Schema({
    todo: String
})

mongoose.model('todo',todoSchema);