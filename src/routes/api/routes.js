/**
 * Module of common routes.
 * Declare the routes here or create new js files.
 */
const express = require('express');
const router = express.Router();

/**
 * Information route about the application.
 */
router.get('/info', function (req, res) {
    let info = { name: "custom template web", version: "2018-04-25", build: "april 2018" };
    res.send(info);
});

module.exports = router;
