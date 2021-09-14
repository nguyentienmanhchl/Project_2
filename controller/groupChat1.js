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
    post: (req, res) => {
        req.session.username=req.body.username;
        req.session.room=req.body.room;
        res.redirect(`/group2`);
            
        
    }
}
module.exports = group;