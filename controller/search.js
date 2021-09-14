const url = require("../models/db_config.js");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const mongodb = require("mongodb");
const session = require("express-session");
const online = require("../controller/online.js");

router.use(session(
    {
        secret: 'secret key',
        resave: false,
        saveUninitialized: false,

    }
))

const MongoClient = mongodb.MongoClient;
var search = {
    post: (req, res) => {
        MongoClient.connect(url, (err, db) => {
            // console err
            if (err) { console.log(err) };
            // check user in database
            let dbo = db.db("project1");           
            dbo.collection("users").findOne({ name: req.session.user }, (err, userSession) => {
             dbo.collection("users").find({ name: req.body.search }).toArray((err, user) => {
                // console err
                if (err) { console.log(err) };
                // not have user
                if (!user[0]) {
                    console.log("======user not found======");
                    
                    res.render('search.ejs',{
                        userSession:userSession ,                        
                        result : false                       
                    });
                }
                else {                         
                    
                    res.render('search.ejs',{
                        userSession:userSession ,
                        userFound: user[0],                        
                        result : true                        
                    });
                    

                }
             })
            })
          
           
        });
    },
}
module.exports = search;