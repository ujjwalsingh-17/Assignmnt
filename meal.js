
//          Level 1 -> Meal Schema

const mongoose=require('mongoose')

const Food=require('./food')

const mealSchema=new mongoose.Schema({
    category:{
        type:String,
        enum:["Breakfast","Lunch","Evening","Snack","Dinner"]
        }, 
    name:String,
    foodItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Food"
    }]
    
})

module.exports= mongoose.model("Meal",mealSchema)