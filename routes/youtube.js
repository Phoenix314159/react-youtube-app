const config = require('../config/config'),
    search = require('youtube-search');

module.exports = app => {

    app.get('/api/search', (req, res) => {
        search(req.query.term, config.options, (err, results) => {
            if (err) {
                console.log(err);
                res.status(404).send(err);
            }
            res.status(200).send(results);
        })
    });
};
