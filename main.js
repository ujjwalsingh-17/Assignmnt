const { query } = require('express')
const express=require('express')
const mongoose=require('mongoose')

const Food=require('./food')
const Meal=require('./meal')
const User=require('./user')

const toId=mongoose.Types.ObjectId

const app=express()

app.use(express.json())

mongoose.connect("mongodb://localhost/assigndb"
).then(
(err)=>{
    console.log("Connected to db");
}).catch((e)=>{ 
        console.log(e)
})


//          Level 2 

//  Task 1 -(To create a post api to post food items)


app.post("/api/food", async (req,res)=>{
    console.log("Inside post function")

    const data=new Food({
        name:req.body.name,
        calories:req.body.calories,
        protein:{
            quantity:req.body.protein.quantity,
            unit:req.body.protein.unit
        },
        carb:{
            quantity:req.body.carb.quantity,
            unit:req.body.carb.unit
        },
        fat:{
            quantity:req.body.fat.quantity,
            unit:req.body.fat.unit
        },
        itemWeight:{
            value:req.body.itemWeight.value
        }

    });

    const val=await data.save();
    res.json(val)


})

// Dummy Food Items Objects Structure Example-

// {
//     "itemWeight": {
//          "value": 350,
//         "unit": "g"
//     },
//     "_id": "62e0ee87095aa76af8eac968",
//     "name": "Fish",
//     "calories": 220,
//     "protein": {
//         "quantity": 20,
//         "unit": "g",
//         "_id": "62e0ee87095aa76af8eac969"
//     },
//     "carb": {
//          "quantity": 8,
//          "unit": "g",
//         "_id": "62e0ee87095aa76af8eac96a"
//     },
//     "fat": {
//         "quantity": 10,
//         "unit": "g",
//         "_id": "62e0ee87095aa76af8eac96b"
//     },
//     "__v": 0
//     }





app.get("/",async (req,res)=>{
    const data=await Food.find()
       
        res.json(data)
        // console.log(data)
    
    
})



app.get("/meals", async(req,res)=>{
  await  Meal.find({}).populate('foodItems').exec((err,docs)=>{
        if(err)
        throw(err)
        res.json(docs);
    })
})




//          Level 2

//  Task 2--> Creating 5 meals using the meal items



// createMeal()     Function for creating meals
async function createMeal(){
    try{ 

        // Meal 1

    const meal=await Meal.create({
        category:"Breakfast",
        name:"Meal1",
        foodItems:[toId('62e0eeb0095aa76af8eac96d'),toId('62e0f362095aa76af8eac9c7'),toId('62e0f25b095aa76af8eac9b8')]

    })
    console.log(meal)
    }
    catch(e){
        console.log(e.message)
    }


    try{ 

        // Meal 2

        const meal=await Meal.create({
            category:"Lunch",
            name:"Meal2",
            foodItems:[toId('62e0ee87095aa76af8eac968'),toId('62e0ef6b095aa76af8eac97c'),toId('62e0effb095aa76af8eac98b')]
    
        })
        console.log(meal)
        }
        catch(e){
            console.log(e.message)
        }


     try{ 

        // Meal 3

        const meal=await Meal.create({
            category:"Dinner",
            name:"Meal3",
            foodItems:[toId('62e0f037095aa76af8eac990'),toId('62e0f14f095aa76af8eac99f'),toId('62e0f1b7095aa76af8eac9a9')]
    
        })
        console.log(meal)
        }
        catch(e){
            console.log(e.message)
        }

    try{ 

        // Meal 4

        const meal=await Meal.create({
            category:"Lunch",
            name:"Meal4",
            foodItems:[toId('62e0ef42095aa76af8eac977'),toId('62e0efdd095aa76af8eac986'),toId('62e0f065095aa76af8eac995')]
    
        })
        console.log(meal)
        }
        catch(e){
            console.log(e.message)
        }

    try{ 

        // Meal 5

        const meal=await Meal.create({
            category:"Breakfast",
            name:"Meal5",
            foodItems:[toId('62e0f185095aa76af8eac9a4'),toId('62e0f229095aa76af8eac9b3'),toId('62e0f341095aa76af8eac9c2')]
    
        })
        console.log(meal)
        }
        catch(e){
            console.log(e.message)
        }



}

//Dummy Meal Object Structure Example-

// {
//     "_id": "62e0fb4384652b126333e992",
//     "category": "Breakfast",
//     "name": "Meal1",
//     "foodItems": [
//         {
//             "itemWeight": {
//                 "value": 500,
//                 "unit": "g"
//             },
//             "_id": "62e0eeb0095aa76af8eac96d",
//             "name": "Milk",
//             "calories": 65,
//             "protein": {
//                 "quantity": 3.3,
//                 "unit": "g",
//                 "_id": "62e0eeb0095aa76af8eac96e"
//             },
//             "carb": {
//                 "quantity": 5,
//                 "unit": "g",
//                 "_id": "62e0eeb0095aa76af8eac96f"
//             },
//             "fat": {
//                 "quantity": 4,
//                 "unit": "g",
//                 "_id": "62e0eeb0095aa76af8eac970"
//             },
//             "__v": 0
//         },
//         {
//             "itemWeight": {
//                 "value": 39,
//                 "unit": "g"
//             },
//             "_id": "62e0f362095aa76af8eac9c7",
//             "name": "Bread",
//             "calories": 230,
//             "protein": {
//                 "quantity": 8,
//                 "unit": "g",
//                 "_id": "62e0f362095aa76af8eac9c8"
//             },
//             "carb": {
//                 "quantity": 50,
//                 "unit": "g",
//                 "_id": "62e0f362095aa76af8eac9c9"
//             },
//             "fat": {
//                 "quantity": 2,
//                 "unit": "g",
//                 "_id": "62e0f362095aa76af8eac9ca"
//             },
//             "__v": 0
//         },
//          {
//             "itemWeight": {
//                 "value": 110.8,
//                 "unit": "g"
//             },
//             "_id": "62e0f25b095aa76af8eac9b8",
//             "name": "Bananas",
//             "calories": 80,
//             "protein": {
//                 "quantity": 1,
//                 "unit": "g",
//              "_id": "62e0f25b095aa76af8eac9b9"
//             },
//             "carb": {
//                 "quantity": 20,
//                 "unit": "g",
//                 "_id": "62e0f25b095aa76af8eac9ba"
//             },
//             "fat": {
//             "quantity": 13,
//                  "unit": "g",
//              "_id": "62e0f25b095aa76af8eac9bb"
//             },
//              "__v": 0
//         }
//     ],
//     "__v": 0
//     }








// level 2

//  Task 3 --(Creating  a user dummy data and planning its meal for 2 days)


app.post("/api/user", async(req,res)=>{

    var user=await User.create({
    name:"Smith",
    calorieRequirement:{
        value:550,
        unit:"g"
    },
    mealPlan:[{
        Date: new Date("2022-07-28"),
        mealReference:[toId('62e0fb4384652b126333e992'),toId('62e0fbabb84de2adab62a86b'),toId('62e0fbf668a6f84abe4291e1')]

        },
    {
        Date:new Date("2022-07-29"),
        mealReference:[toId('62e0fc75625f20111847b877'),toId('62e0fc3ed8a03bd4c796c0c4'),toId('62e0fbf668a6f84abe4291e1')]
    }]

})
const val=await user.save();
res.json(val)
 
})



//      Level 2

// Task 4 (Creatign a Patch API)


app.patch("/api/users", (req,res)=>{
   User.updateOne(
    {name:"Smith"},
    {$set:{
        "mealPlan.$.mealReference[1]": "62e0fbabb84de2adab62a86b"
    }},
    function(err){
        if(!err){
            res.send("Successfully updated user")
        }
        else
        res.send(err)
    }
   )
})


app.get("/users", async(req,res)=>{
    await  User.find({}).populate('mealPlan.mealReference').exec((err,docs)=>{
          if(err)
          throw(err)
          res.json(docs);
      })
  })


  //   Dummy User Schema Object Structure Example

//   {
//     "calorieRequirement": {
//         "value": 450,
//         "unit": "g"
//         },
//     "_id": "62e1030bd40a8efecf97eb84",
//     "name": "Robert",
//     "mealPlan": [
//         {
//             "mealReference": [
//                     {
//                         "_id": "62e0fb4384652b126333e992",
//                         "category": "Breakfast",
//                         "name": "Meal1",
//                         "foodItems": [
//                             "62e0eeb0095aa76af8eac96d",
//                             "62e0f362095aa76af8eac9c7",
//                             "62e0f25b095aa76af8eac9b8"
//                         ],
//                     "__v": 0
//                     },
//                     {
//                         "_id": "62e0fbabb84de2adab62a86b",
//                         "category": "Lunch",
//                         "name": "Meal2",
//                         "foodItems": [
//                             "62e0ee87095aa76af8eac968",
//                             "62e0ef6b095aa76af8eac97c",
//                             "62e0effb095aa76af8eac98b"
//                         ],
//                      "__v": 0
//                     },
//                     {
//                         "_id": "62e0fbf668a6f84abe4291e1",
//                         "category": "Dinner",
//                         "name": "Meal3",
//                         "foodItems": [
//                             "62e0f037095aa76af8eac990",
//                             "62e0f14f095aa76af8eac99f",
//                             "62e0f1b7095aa76af8eac9a9"
//                         ],
//                     "__v": 0
//                     }
//             ],
//             "_id": "62e1030bd40a8efecf97eb85"
//         },
//         {
//             "mealReference": [
//                 {
//                     "_id": "62e0fc75625f20111847b877",
//                     "category": "Breakfast",
//                     "name": "Meal5",
//                     "foodItems": [
//                             "62e0f185095aa76af8eac9a4",
//                             "62e0f229095aa76af8eac9b3",
//                             "62e0f341095aa76af8eac9c2"
//                         ],
//                     "__v": 0
//                 },
//                 {
//                     "_id": "62e0fc3ed8a03bd4c796c0c4",
//                     "category": "Lunch",
//                     "name": "Meal4",
//                     "foodItems": [
//                             "62e0ef42095aa76af8eac977",
//                             "62e0efdd095aa76af8eac986",
//                             "62e0f065095aa76af8eac995"
//                         ],
//                     "__v": 0
//                 },
//                 {
//                     "_id": "62e0fbf668a6f84abe4291e1",
//                     "category": "Dinner",
//                     "name": "Meal3",
//                     "foodItems": [
//                             "62e0f037095aa76af8eac990",
//                             "62e0f14f095aa76af8eac99f",
//                             "62e0f1b7095aa76af8eac9a9"
//                         ],
//                     "__v": 0
//                  }
//             ],
//         "_id": "62e1030bd40a8efecf97eb86"
//         }
//     ],
//     "__v": 0
//     }





app.listen(3000,()=>{
    console.log("Server started on port 3000")
})