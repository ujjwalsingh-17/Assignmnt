
//      Level 1 -> User Schema

const mongoose=require("mongoose")
const Meal=require('./meal')


const userSchema=new mongoose.Schema({
    name:String,
    calorieRequirement:{
        value:Number,
        unit:{
            type:String,
            enum:['g','kg','litre','ml','item']
        }
    },
    mealPlan:[{
        date: Date,
        mealReference:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Meal"
        }]
    }]
})

module.exports =mongoose.model('User',userSchema)

