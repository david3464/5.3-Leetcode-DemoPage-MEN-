const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Category Schema
const CategorySchema = new Schema({
    category_name : {
        type: String,
        required: true
    },
    type_name : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default:Date.now
    }
});
const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;