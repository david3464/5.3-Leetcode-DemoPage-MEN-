const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Question Schema
const QuestionSchema = new Schema({
        title : {
                type: String,
                required: true
        },
        number : {
                type: Number,
                required: true
        },
        type : {
                type: mongoose.Schema.type.ObjectID,
                required: true,
                ref: 'Category'
        },
        Description : {
                type: String
        },
        analyze : {
                type: String
        },
        solution : {
                type: String
        },
        tip : {
                type: String
        },
        create_date : {
                type: Date,
                required:true,
                default:Date.now
        },
        coverImageName: {
                type: String,
                required: true,
        },

});
const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;