const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect to MongoDB
connectDB();

//init middleware
app.use(express.json({extended : false}));

//define routes
app.use('/api/recipe',require('./routes/recipe'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log("Server Started on port 5000"));