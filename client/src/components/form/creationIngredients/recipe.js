import { formatMs } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import {Button,Container} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {removeFavouriteRecipes} from '../../../actions/recipe';

const SavedRecipe = ({name, post}) => {
    const classes = useStyles();

    const removeIngredient = (e) =>{
        e.preventDefault();
        for(var i=0; i<post.ingredients.length; i=i+1){
            if(post.ingredients[i] === name){
                post.ingredients.splice(i,1);
                console.log(post);
            }
        }
    }
    return(
        <div>
            <Container className={classes.ingredient}>
            <p> {name} </p>
            <Button onClick={removeIngredient}>X</Button>
            </Container>
        </div>
    );

};

export default SavedRecipe;