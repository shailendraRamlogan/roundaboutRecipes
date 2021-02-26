import React from 'react';
import useStyles from './styles';

const Recipe = ({title, calories, image, ingredients}) => {
    const classes = useStyles();
    return(
        <div className={classes.gridItem}>
            <h1 className={classes.title}> {title} </h1>
            <div className={classes.images}>
            <img src={image} alt="" />
            </div>
            <div className={classes.calories}>
            <h4>Calories</h4>
            <p>{calories}</p>
            </div>
            <ol className={classes.ingredients}>
                <h4>Ingredients:</h4>
                {ingredients.map(ingredient =>(
                    <li className={classes.ingredientX}>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );

};

export default Recipe;