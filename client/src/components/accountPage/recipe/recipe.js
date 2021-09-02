import React from 'react';
import useStyles from './styles';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {removeRecipes} from '../../../actions/recipe';

const Recipe = ({refresh,recipeids,title, calories, image, ingredients}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleDelete = (e) =>{
        e.preventDefault();
        const message ={
            userid: localStorage.getItem('roundaboutToken'),
            recipeid: recipeids
        }
        dispatch(removeRecipes(message))
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
                <Button className={classes.favButton} onClick={handleDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                </Button>
            </BackSide>
        </Flippy>
    );

};

export default Recipe;