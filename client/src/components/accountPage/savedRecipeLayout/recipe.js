import { formatMs } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import {Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {removeFavouriteRecipes} from '../../../actions/recipe';

const SavedRecipe = ({refresh,recipeids,title, calories, image, ingredients}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleRemove = (e) =>{
        e.preventDefault();
        const message ={
            userid: localStorage.getItem('roundaboutToken'),
            recipeid: recipeids
        }
        dispatch(removeFavouriteRecipes(message))
            .then((payload) =>{
                alert(payload.message);
                refresh(e);
            });
        
    }
    return(
        <div className={classes.gridItem}>
            <div className={classes.titleDiv}>
            <h1 className={classes.title}> {title} </h1>
            </div>
            <div className={classes.images}>
            <img src={image} alt="" style={{width: '300px'}}/>
            </div>
            <div className={classes.calories}>
            <h4>Calories</h4>
            <p>{calories}</p>
            </div>
            <ol className={classes.ingredients}>
                <h4>Ingredients:</h4>
                {ingredients.map(ingredient =>(
                    <li className={classes.ingredientX}>{ingredient}</li>
                ))}
            </ol>
            <Button className={classes.favButton} onClick={handleRemove}>Remove From Favourites</Button>
        </div>
    );

};

export default SavedRecipe;