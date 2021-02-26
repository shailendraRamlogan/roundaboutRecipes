import React, { useState} from 'react';
import { TextField, Button, Typography, Paper, Container} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import {findUser} from '../../actions/users';
import {createRecipe} from '../../actions/recipe';

const CreateRecipeForm = ()=>{
    const [postData, setPostData] = useState({name: '', calories: '', image: '', ingredients: [], creator: '', creatorID: ''});
    const classes = useStyles();
    const dispatch = useDispatch();
    const [token, setToken] = useState({token: localStorage.getItem('roundaboutToken')});


    const clear = () => {
        setPostData({name: '', calories: '', image: '', ingredients: [], creator: ''});
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        //console.log(postData.creator);
        //console.log(token);
        dispatch(findUser(token))
            .then((payload) => {
                postData.creator = payload.name;
                postData.creatorID = token.token;   
                //console.log(payload.name);
                dispatch(createRecipe(postData))
                    .then((payload) => {
                        if(payload.success === true){
                            alert(payload.message);
                            clear();
                        }
                        else{
                            alert(payload.message);
                            clear();
                        }

                        
                
                    });
        });
        
        console.log(postData);
        
        //window.location.href = "/account";
    }

    return(
        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className = {classes.form} onSubmit = {handleSubmit}>
                <Typography variant="h6"> Please fill out this form to create a new recipe </Typography>
                <TextField
                    className={classes.formElement} 
                    name="name"
                    variant="outlined"
                    label="Recipe Name"
                    fullWidth
                    value={postData.name}
                    onChange={(e) => setPostData({...postData, name: e.target.value})}
                />
                <TextField
                    className={classes.formElement} 
                    name="calories"
                    type="number"
                    variant="outlined"
                    label="Calories"
                    fullWidth
                    value={postData.calories}
                    onChange={(e) => setPostData({...postData, calories: e.target.value})}
                />

                <FileBase 
                    type = "file"
                    multiple = {false}
                    onDone = {({base64}) => setPostData({...postData, image: base64})}

                />
                <Button className={classes.buttonSubmit} variant="contained" type="submit" fullWidth>Create Recipe</Button>              
            </form>
        </Paper>
    );
}

export default CreateRecipeForm;