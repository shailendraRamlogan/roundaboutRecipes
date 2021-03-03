import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import recipes from './routes/recipes.js';
import users from './routes/users.js';

const app = express();
dotenv.config();

//Middleware

app.use(bodyParser.json());

//database

//const db = process.env.CONNECTION_URI;

//connect to database
app.use(cors())
mongoose.connect(process.env.CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.log(err));

//use hese routes
app.use('/recipes', recipes);
app.use('/user', users);

app.get('/', (req,res) =>{
    res.send('hello to recipes api');
})
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));