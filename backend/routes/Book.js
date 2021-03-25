const express = require('express');
const router = express.Router();
const MongoClient =require('mongodb').MongoClient;
const url = "mongodb+srv://user1:4VUnYWQAUO8daRVB@cluster0.apeyl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mongodb = require('mongodb');

//List All

//Delete in id
router.post('/deletedata',function (req,res,next) {
        let stringToJson=chunk.toString();
        let json =JSON.parse(stringToJson);
        let id=new mongodb.ObjectID(json["_id"]);
        MongoClient.connect(url,function (err,db) {
            if(err) throw err;
            let dbo=db.db("mydb");
            dbo.collection("Book").deleteMany({_id:id}).toArray(function (err,result) {
                if (err) throw err;
                console.log(result);
                db.close();
                res.send(result);
            })
    })
});

//Find one element
router.get('/findOne',function (req,res) {
    req.on('data', function(chunk) {
        let stringToJson=chunk.toString();
        let json =JSON.parse(stringToJson);
        let id=new mongodb.ObjectID(json["_id"]);
        MongoClient.connect(url,function (err,db) {
            if(err) throw err;
            let dbo=db.db("mydb");
            dbo.collection("Book").find({_id:id}).toArray(function (err,result) {
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
router.put('/update',function (req,res) {
    console.log(req.body)
    let ObjectID = require('mongodb').ObjectID;
    MongoClient.connect(url,function (err,db){
        if(err) throw err;
        let dbo=db.db("mydb");
        dbo.collection("Book").updateOne({"_id": ObjectID(req.body._id)},{$set:req.body.data} ,function (err,result) {
            if (err) throw err;
            db.close();
        })
        res.status(200).send('OK')
    });
})

module.exports = router;