import React from 'react';
import useStyles from './styles';
import {Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {addFavouriteRecipes} from '../../../actions/recipe';

const Recipe = ({id,title, calories, image, ingredients}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleFav = (e) =>{
        e.preventDefault();
        const parameter = {
            recipeid: id,
            userid: localStorage.getItem('roundaboutToken')
        }
        //console.log(parameter);
        dispatch(addFavouriteRecipes(parameter))
            .then((payload) => {
                //console.log(payload);
                if(payload.success === true){
                    alert(payload.message);
                }
                else{
                    alert(payload.message);
                }
            });
    }
    return(
        <div className={classes.gridItem}>
            <div className={classes.titleDiv}>
            <h1 className={classes.title}> {title} </h1>
            </div>
            <div className={classes.images}>
            <img className={classes.image} src={image} alt=""  style={{width: '300px'}}/>
            </div>
            <div className={classes.calories}>
            <h4>Calories</h4>
            <p>{calories}</p>
            </div>
            <ol className={classes.ingredients}>
                <h4 className={classes.ingredientLabel}>Ingredients:</h4>
                {ingredients.map(ingredient =>(
                    <li className={classes.ingredientX}>{ingredient}</li>
                ))}
            </ol>
            <Button className={classes.favButton} onClick={handleFav}>Add To Favourites</Button>
        </div>
    );

};

export default Recipe;