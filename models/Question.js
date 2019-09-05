const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Question Schema
const QuestionSchema = new Schema({
    title : {
            type: String,
            required: true
    },
    Description : {
            type: String,
            required: true
    },
    type : {
            type: String,
            required: true
    },
    analyze : {
            type: String,
            required: true
    },
    tip : {
            type: String,
            required: true
    },
    date : {
            type: Date,
            default:Date.now
    }
});
const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;