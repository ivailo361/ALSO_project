const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const express = require('express');
const app = express()
// const db = require('./models/connect')

// db().then(() => {
require('./config/express')(app);

require('./config/routes')(app);

const route = require('./config/routes.js')
// app.use('/', route)

app.use(function (err, req, res, next) {
    console.error(err.message);
    res.status(500).send(err.message);
    console.log('*'.repeat(90))
});



app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));
// })
