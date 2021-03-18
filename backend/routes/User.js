const express = require('express');
const router = express.Router();
const MongoClient =require('mongodb').MongoClient;
const url = "mongodb+srv://user1:4VUnYWQAUO8daRVB@cluster0.apeyl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mongodb = require('mongodb');



//Find one element
router.get('/findOne',function (req,res) {
    req.on('data', function(chunk) {
        let stringToJson=chunk.toString();
        let json =JSON.parse(stringToJson);
        let name = (json["username"]);
        MongoClient.connect(url,function (err,db) {
            if(err) throw err;
            let dbo=db.db("mydb");
            dbo.collection("Users").findOne(name,function (err,result) {
                if (err) throw err;
                console.log(result);
                db.close();
                res.send(result);
            })
        })
    })
});
//Add one element
router.post('/add',(req ,res)=>{
    MongoClient.connect(url,function (err,db) {
        if (err) throw err;
        let dbo=db.db("mydb");
        dbo.collection("Users").insertOne(req.body,function (err,res) {
            if(err)throw err;
            console.log(res.insertedCount+" Elem beillesztve az adatbázisba")
            db.close();
        })
    })
    res.status(200).send();
})

module.exports = router;