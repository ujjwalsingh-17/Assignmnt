
//      Level 1 -> Food Schema 

const mongoose=require('mongoose')

const countSchema=new mongoose.Schema({
    quantity:Number,
    unit:{
        type:String,
        enum:['g','kg','litre','ml','item']
    }
})

const foodSchema=new mongoose.Schema({
    
        name:String,
        calories:Number,
        protein:countSchema,
        carb:countSchema,
        fat:countSchema,
        itemWeight:{
            value:Number,
            unit:{
                type:String,
                default:'g',
                enum:['g']
            }
        }
    
})



module.exports =mongoose.model("Food",foodSchema)