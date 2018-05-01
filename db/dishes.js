const mongoose=require('mongoose');
const Schema =mongoose.Schema;
const dishSchema=new Schema({
    name:{
        type:string,
        require:true,
        unique: true
    },
    description:
    {
            type: string,
            require: true
    }
},{timestamps:true}
)
var Dishes =mongoose.model('Dish',dishSchema);
module.exports =Dishes;