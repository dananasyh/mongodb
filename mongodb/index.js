const mongoose = require('mongoose');
mongoose.Promise = require ('bluebird');
const dishes = require('./models/dishes');
const url = 'mongodb://localhost:27017/mydb';
const connect = mongoose.connect(url,{
useMongoClient: true
});
connect.then((db) => {
	console.log('connected correctly to the server');
	var newDish = dishes({
		name:'abdullahi',
		description:'test1'
	});
	newDish.save()
	.then((dishes) =>{
		console.log(dishes);
		return dishes.find({}).exec();
	})
	
	.catch((err) => {
		console.log(err);
	});
});