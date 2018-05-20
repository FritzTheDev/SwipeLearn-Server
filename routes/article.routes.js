const express = require('express');
const router = express.Router();
const Article = require('../models/article.model');

router.get('/', (req, res, next) => {
    Article.find({}, (err, articles) => {
        let result = [];
        articles.forEach(element => {
            result.push(element);
        });
        res.json(result);
    });
});
router.post('/new', (req, res, next) => {
    let newArticle = new Article({
        title: req.body.title,
        body: req.body.body,
        img: req.body.img,
        url: req.body.url,
        category: req.body.category
    });
    Article.addArticle(newArticle, (err, article) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to add article' });
        } else {
            res.json({ success: true, msg: 'Article Added' });
        }
    });
});
module.exports = router;