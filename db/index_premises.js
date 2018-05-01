const mongoose =require('mongoose');
mongoose.Promise=require('bluebird');
const Dishes =require('./models/dishes');
const connect =mongoose.connect(url,{useMongoClient:true});
connect.then((db)=>{
console.log('connected correctly to server');
var newDish=Dishes({
    id:101,
    name:'abdullaahi',
    description:'studdnt',
    section:'D1507'
});
newDish.save()
.then((dish)=>{
    connect.log(dish);
    return Dishes.find({}).exec();
})
.then((Dishes)=>
{
    connect.log(Dishes);
    return db.Collection('dishes').drop();
})
.then(()=>
{
    return db.close();
})
.then((err)=>
{
    console.log('error');
})
})