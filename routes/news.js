var express = require('express');
var router = express.Router();
var News = require('../models/news');
/* GET users listing. */
router.get('/:id', async (req , res) =>{
    const idNews = req.query.id;
const news = await News.findAll({
    where: {
        id: idNews;
    }
})
res.json(news);
});


module.exports = router;
