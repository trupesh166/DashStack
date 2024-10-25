const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname : {  type : String ,required : true },
    lastname : {  type : String ,required : true },
    email : {  type : String ,required : true ,unique : true },
    phone : {  type : String ,required : true ,unique : true },
    country : {  type : String ,required : true ,unique : true },
    state : {  type : String ,required : true ,unique : true },
    city : {  type : String ,required : true ,unique : true },
    society : {  type : String ,required : true ,unique : true },
    password : {  type : String ,required : true  },
    role : { type : String ,enum : ['user','admin'] ,required : true} ,
    otp : { type : String },
    otpExpires : { type : Date}
});

module.exports = mongoose.model('User', userSchema)