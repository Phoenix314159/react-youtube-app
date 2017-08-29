const express = require('express'),
    app = express(),
    config = require('./config/config');

require('./middleware/middleware')(app);
require('./routes/youtube')(app);

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
})

