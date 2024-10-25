const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
const mongoose = require('./config/database')
const authRoute = require('./routes/authRoute');
const cookie_parser = require('cookie-parser')
require('dotenv').config();

app.use(cookie_parser());
app.use(express.json());
app.use('/api/auth', authRoute);

app.listen(PORT,(req,res) =>{
    console.log(`Running on port ${PORT}`);   
})