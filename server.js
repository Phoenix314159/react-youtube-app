const express = require('express'),
    app = express(),
    config = require('./config/config');

require('./middleware/middleware')(app);
require('./routes/youtube')(app);

//<------ for production build ------->
process.env.PWD = process.cwd();
app.use(express.static(process.env.PWD  + '/client/build'));
app.get('*', (req, res) => {
    res.sendFile(process.env.PWD  + '/client/build/index.html');
})
//<----------------------------------->
// app.use(express.static(__dirname  + '/build'));
app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
})

