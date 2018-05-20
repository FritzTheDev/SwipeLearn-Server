const mongoose = require('mongoose');
const ArticleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    }
});

const Article = module.exports = mongoose.model('Article', ArticleSchema);

module.exports.addArticle = (newArticle, callback) => {
    newArticle.save(callback);
}