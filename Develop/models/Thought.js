const mongoose = require('mongoose')

const ThoughtSchema = mongoose.Schema({
    id: String,
    content: String,
    createdAt: Date,
    username: String,
    reactions: [{
        id: String,
        reactionBody: String,
        username: String,
        createdAt: Date
    }]
})

const model = mongoose.model('thoughts', ThoughtSchema)