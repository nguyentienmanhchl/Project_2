const url = require('../models/db_config.js');
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const mongodb = require("mongodb");
const session = require("express-session");


router.use(session(
    {
        secret: 'secret key',
        resave: false,
        saveUninitialized: false,

    }
))

const MongoClient = mongodb.MongoClient;
var group2 = {
    get: (req, res) => {
        var query ={groupname:req.session.room};
        MongoClient.connect(url, (err, db) => {
           let dbo = db.db("project1");
      
      
      
           dbo.collection("groupchat").findOne(query, (err, result) => {
                           
              console.log(result);
              if(result){
                
               
                res.render("group_chat.ejs",{
                    check: 1,
                    username :req.session.username ,
                    room : req.session.room,
                    data: result
                })
              }else{
                dbo.collection("groupchat").insertOne(query, (err, res) => {
                    if (err) throw err;
                    console.log("======Insert ok======");
                });
                dbo.collection("groupchat").updateOne(query , {
                    "$push": {
                        message: {
                            usersend:"botName",
                            time:`${new Date().getHours()}:${new Date().getMinutes()}-${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
                            mes:"Welcome"
                        }
                    }
                });
                res.render("group_chat.ejs",{
                    check: 0,
                    username :req.session.username  ,
                    room : req.session.room,
                    data:result
                })
              }
       
           });
    
        });
       
    }

   
}
module.exports = group2;