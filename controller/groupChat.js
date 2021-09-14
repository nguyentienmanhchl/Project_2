const url = require("../models/db_config.js")
const express = require("express");
const router = express.Router();
const mongodb = require("mongodb");
const session = require("express-session");

router.use(session(
    {
        secret: 'secret key',
        resave: false,
        saveUninitialized: false,

    }
))


var group = {
    get: (req, res) => {
        
        res.render("create_group.ejs");
            
        
    }
}
module.exports = group;