const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(() =>{
    console.log("Connected to MongoDB");    
}).catch((error) =>{
    console.log("Server Error" , error.message);  
})

// mongoose.connect('mongodb://127.0.0.1:27017/society-management').then(() =>{
//     console.log("Connected to MongoDB");    
// }).catch((error) =>{
//     console.log("Server Error" , error.message);  
// })