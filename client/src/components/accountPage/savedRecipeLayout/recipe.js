import { formatMs } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import {Button} from '@material-ui/core';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
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
        <Flippy>
            <FrontSide style={{backgroundColor: 'white'}}>
                <div className={classes.images}>
                    <img className={classes.image} src={image} alt=""/>
                </div>
                <div style={{display: 'flex', width: '100%', marginTop: '1rem'}}>
                    <div className={classes.titleDiv}>
                        <h1 className={classes.title}> {title} </h1>
                    </div>
                    <div className={classes.calories}>
                        <p className={classes.caloriesText}>{calories}</p>
                        <h4 className={classes.caloriesLabel}>Calories</h4>
                    </div>
                </div>
            </FrontSide>
            <BackSide style={{border: '3px solid #0cad92', borderRadius: '5px', backgroundColor: 'white'}}>
                <ol className={classes.ingredients}>
                    <h4 className={classes.ingredientLabel}>Ingredients:</h4>
                    {ingredients.map(ingredient =>(
                        <li className={classes.ingredientX}>{ingredient}</li>
                    ))}
                </ol>
                <Button className={classes.favButton} onClick={handleRemove}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                </Button>
            </BackSide>
        </Flippy>
    );

};

export default SavedRecipe;