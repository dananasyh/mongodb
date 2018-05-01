const MongoClient = require('mongodb').MongoClient;
const assert =require('assert');
const url='mongodb://localhost:27017/MyBD';
MongoClient.connect(url,(err,database )=>{
    assert.equal(err,null);
    console.log('connected correctly to server');
const dbs=database.db('MyDB');
const collection=dbs.collection('dishes');
collection.insertOne({'name':'abdullahi','description':'hello world'},(err,result)=>
{
    assert.equal(err,null);
    console.log('after insertion');
    console.log(result.ops);
    collection.find({}).toArray((err,docs)=>
{
    assert.equal(err,null);
    console.log('found : \n');
    console.log(docs);
    dbs.dropCollection('dishes',(err,result)=>
{
     assert.equal(err, null);
     database.close();
});
});
});
});