import React from 'react';
import useStyles from './styles';
import {Button} from '@material-ui/core';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
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
        <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
        >
            <FrontSide style={{backgroundColor: 'white'}}>
                <div className={classes.images}>
                    <img className={classes.image} src={image} alt=""/>
                </div>
                <div className={classes.details}>
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
                <Button className={classes.favButton} onClick={handleFav}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </Button>
            </BackSide>
        </Flippy>
    );

};

export default Recipe;