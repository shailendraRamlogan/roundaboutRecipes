import { formatMs } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import {Button} from '@material-ui/core';

const Recipe = ({title, calories, image, ingredients}) => {
    const classes = useStyles();
    return(
        <div className={classes.gridItem}>
            <h1 className={classes.title}> {title} </h1>
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
            <Button className={classes.editButton}>Edit Recipe</Button>
            <Button className={classes.removeButton}>Remove Recipe</Button>
        </div>
    );

};

export default Recipe;