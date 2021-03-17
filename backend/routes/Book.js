const express = require('express');
const router = express.Router();
const MongoClient =require('mongodb').MongoClient;
const url = "mongodb+srv://user1:4VUnYWQAUO8daRVB@cluster0.apeyl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mongodb = require('mongodb');

//List All
//Delete in id
//Find one element
router.get('/findOne',function (req,res) {
    req.on('data', function(chunk) {
        let stringToJson=chunk.toString();
        let json =JSON.parse(stringToJson);
        let id=new mongodb.ObjectID(json["_id"]);
        MongoClient.connect(url,function (err,db) {
            if(err) throw err;
            let dbo=db.db("mydb");
            dbo.collection("Employee").find({_id:id}).toArray(function (err,result) {
                if (err) throw err;
                console.log(result);
                db.close();
                res.send(result);
            })
        })
    })
});
//Add one element
//Update one element


module.exports = router;