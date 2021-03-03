import React, { useState} from 'react';
import { TextField, Button, Typography, Paper, Container} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import FileBase from 'react-file-base64';

import Recipe from './creationIngredients/recipe';
import useStyles from './styles';
import {findUser} from '../../actions/users';
import {createRecipe} from '../../actions/recipe';

const CreateRecipeForm = ()=>{
    const [postData, setPostData] = useState({name: '', calories: '', image: '', ingredients: [], creator: '', creatorID: ''});
    const classes = useStyles();
    const dispatch = useDispatch();
    const [token, setToken] = useState({token: localStorage.getItem('roundaboutToken')});
    const [currIngredient, setCurrIngredient] = useState("");
    
    const clear = () => {
        setPostData({name: '', calories: '', image: '', ingredients: [], creator: ''});
    };

    const addIngredient = (e) =>{
        e.preventDefault();
        //console.log(currIngredient);
        if(currIngredient){
            postData.ingredients.push(currIngredient);
        }
        setCurrIngredient('');
        //console.log(postData.ingredients);
    }

    
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
                        //console.log(payload);
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
        
        //console.log(postData);
        
        //window.location.href = "/account";
    }

    return(
        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className = {classes.form} onSubmit = {handleSubmit}>
                <Typography className={classes.heading} variant="h6"> Please fill out this form to create a new recipe </Typography>
                <TextField
                    className={classes.formElement} 
                    name="name"
                    variant="outlined"
                    label="Enter Recipe Name"
                    fullWidth
                    value={postData.name}
                    onChange={(e) => setPostData({...postData, name: e.target.value})}
                />
                <TextField
                    className={classes.formElement} 
                    name="calories"
                    type="number"
                    variant="outlined"
                    label="Enter Number of Calories"
                    fullWidth
                    value={postData.calories}
                    onChange={(e) => setPostData({...postData, calories: e.target.value})}
                />
                <Container className={classes.ingredientsContainer}>
                    <Typography variant="h6"> Ingredients: </Typography>
                    {postData.ingredients.map(ingredient =>(
                        <Recipe
                            key = {ingredient}
                            post = {postData}
                            name = {ingredient}
                        />
                    ))}
                    <TextField
                        className={classes.formElement} 
                        name="ingredients"
                        variant="outlined"
                        label="Enter a Ingredient"
                        fullWidth
                        value = {currIngredient}
                        onChange={(e) => setCurrIngredient(e.target.value)}
                    />
                    <Button className={classes.addButton} onClick={addIngredient}> Add ingredient </Button>
                </Container>
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