const express = require('express'),
    app = express(),
    config = require('./config/config');

require('./middleware/middleware')(app);
require('./routes/youtube')(app);

//<------ for production build ------->
// app.use(express.static(__dirname + '/client/build'));
//
// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/client/build/index.html');
// })

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
})

