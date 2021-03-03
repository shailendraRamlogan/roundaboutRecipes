import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

import recipes from './routes/recipes.js';
import users from './routes/users.js';

const app = express();


//Middleware

app.use(bodyParser.json());

//database

const db = 'mongodb+srv://admin:admin123@cluster0.kjcvb.mongodb.net/<dbname>?retryWrites=true&w=majority';

//connect to database
app.use(cors())
mongoose.connect(process.env.MONGODB_URI || db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.log(err));

//use hese routes
app.use('/recipes', recipes);
app.use('/user', users);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('../client/build'));
    app.get('*', (req,res) =>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));