import react, {useState} from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper, Container} from '@material-ui/core';

import Recipe from './recipe/recipe';
import SavedRecipe from './savedRecipeLayout/recipe';
import {useDispatch} from 'react-redux';
import {getUserRecipes, getFavouriteRecipes} from '../../actions/recipe';
const AccountPage = ()=>{
    const [userRecipes, setUserRecipes] = useState([]);
    const [savedRecipes, setSavedRecipes] = useState([]);
    const classes = useStyles();
    const dispatch = useDispatch();

    const token = {
        token: localStorage.getItem('roundaboutToken')
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(getUserRecipes(token))
            .then((payload) => {
                if(payload.success === true){
                    setUserRecipes(payload.recipes);
                    setSavedRecipes([]);
                }
                else{
                    alert(payload.message);
                }
                
            });
    }

    const fetchSavedRecipes = (e) =>{
        e.preventDefault();
        dispatch(getFavouriteRecipes(token))
            .then((payload) => {
                //console.log(payload);
                if(payload.success === true){
                    setSavedRecipes(payload.recipes);
                    setUserRecipes([]);
                    console.log(userRecipes);
                }
                else{
                    alert(payload.message);
                }
                
            });
    }
    return(
        <Paper className={classes.paper}>
            
            <Container className={classes.mainContainer}>
                <Typography variant="h5">Hi there !!</Typography>
                <Typography variant="h6">Please feel free to create new recipes</Typography>
                <Typography variant="h6">You can also view recipes you created and your saved recipes</Typography>
                
                <Button  className={classes.button} variant="contained" href="/createRecipe" color="primary" fullWidth>createRecipe</Button>
                <Button   className={classes.button} variant="contained" color="primary" fullWidth onClick={handleSubmit}>Get My Recipes</Button>
                <Button   className={classes.button} variant="contained" color="primary" fullWidth onClick={fetchSavedRecipes}>Get Liked Recipes</Button>    
                
                <div className={classes.gridContainer}>
                    {savedRecipes.map(recipe =>(
                        <SavedRecipe
                        key={recipe._id}
                        title={recipe.name}
                        calories={recipe.calories}
                        image={recipe.image} 
                        ingredients={recipe.ingredients}
                        />
                    ))}
                    {userRecipes.map(recipe =>(
                        <Recipe
                        key={recipe._id}
                        title={recipe.name}
                        calories={recipe.calories}
                        image={recipe.image} 
                        ingredients={recipe.ingredients}
                        />
                    ))}
                </div>

                
            </Container>
        </Paper>
    );
}

export default AccountPage;