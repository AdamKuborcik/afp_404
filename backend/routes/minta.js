const express = require('express');
const router = express.Router();
const MongoClient =require('mongodb').MongoClient;
const url = "mongodb+srv://user1:4VUnYWQAUO8daRVB@cluster0.apeyl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mongodb = require('mongodb');


/* GET element listing. */
//List All
router.get('/', function(req, res, next) {
    MongoClient.connect(url,function (err,db){
        if(err) throw err;
        let dbo=db.db("mydb");
        dbo.collection("Employee").find({}).toArray(function (err,result) {
            if (err) throw err;
            db.close();
            res.send(result);
        })
    })
});
/* DELETE element listing. */
//Delete in id
router.delete('/delete',function (req,res) {
    MongoClient.connect(url,function (err,db){
        if(err) throw err;
        let dbo=db.db("mydb");
        dbo.collection("Employee").deleteOne(req.body,function (err,result) {
            if (err) throw err;
            console.log(result.insertedCount+" elem törölve");
            db.close();
        })
    })
    res.status(200).send();
});
/* GET one element listing. */
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
/* Post one element to list. */
//Add one element
router.post('/add',(req ,res)=>{
    MongoClient.connect(url,function (err,db) {
        if (err) throw err;
        let dbo=db.db("mydb");
        dbo.collection("Employee").insertOne(req.body,function (err,res) {
            if(err)throw err;
            console.log(res.insertedCount+" Elem beillesztve az adatbázisba")
            db.close();
        })
    })
    res.status(200).send();
})

/* Update one element to list. */
//Update one element
router.put('/update',function (req,res) {
    console.log(req.body)
    let ObjectID = require('mongodb').ObjectID;
    MongoClient.connect(url,function (err,db){
        if(err) throw err;
        let dbo=db.db("mydb");
        dbo.collection("Employee").updateOne({"_id": ObjectID(req.body._id)},{$set:req.body.data} ,function (err,result) {
            if (err) throw err;
            db.close();
        })
        res.status(200).send('OK')
    });
})
module.exports = router;