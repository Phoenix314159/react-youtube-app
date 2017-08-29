const config = require('../config/config'),
    search = require('youtube-search'),
    opts = {
        maxResults: 7,
        key: config.API_KEY,
        order: 'rating'
    };

module.exports = app => {

    app.get('/api/search', async (req, res) => {
        search(req.query.term, opts, (err, results) => {
            if (err) {
                return console.log(err);
            }
            res.send(results);
        })
    });
}
