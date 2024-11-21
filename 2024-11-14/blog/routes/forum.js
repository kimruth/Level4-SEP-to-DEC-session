var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const post = [
        {title: 'Hello world', contact: 'qwerty', author: 'John'},
        {title: 'Node.js programming', contact: 'code', author: 'John'},
        {title: 'react.js', contact: 'express', author: 'Joe'},
        {title: 'angular', contact: 'typeScript', author: 'Ruth'},
        {title: 'styling', contact: 'style', author: 'Jane'},
        {title: 'HTML', contact: 'language', author: 'Ruth'},
        {title: 'SCSS', contact: 'styling', author: 'Ruth'},
    ];

    res.render('forum', {'post': post});
})

module.exports = router;