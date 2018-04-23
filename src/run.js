/**
 * This is the main module, it is executed to start the server.
 * Configure and initialize the application.
 */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const morgan = require('morgan');

// get the application settings. 
const config = require('./config/configuration');

// create our app with express.
const app = express();

// configure all environments.
app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// catch all the possible errors.
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({ error: err });
});

app.set('host', config.HOST || "http://localhost");
app.set('port', config.PORT || 8100);

// start the server.
app.listen(app.get('port'), () => {
    console.log('[*] - Server started in %s:%s', app.get('host'), app.get('port'));
});
