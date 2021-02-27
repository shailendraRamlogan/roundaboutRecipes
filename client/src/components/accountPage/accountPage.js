import react, {useState} from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper, Container} from '@material-ui/core';

import Recipe from './recipe/recipe';
import {useDispatch} from 'react-redux';
import {getUserRecipes} from '../../actions/recipe';
const AccountPage = ()=>{
    const [recipes, setRecipes] = useState([]);
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
                    setRecipes(payload.recipes);
                }
                else{
                    alert(payload.message);
                }
                
            });
    }
    return(
        <Paper className={classes.paper}>
            
            <Container className={classes.mainContainer}>
                <Typography variant="h5">Welcome to Roundabout Recipes</Typography>
                <Typography variant="h6">Please Register or Login to make full use of our services</Typography>
                
                
                <Button  className={classes.button} variant="contained" href="/createRecipe" color="primary" fullWidth>createRecipe</Button>
                <Button   className={classes.button} variant="contained" color="primary" fullWidth onClick={handleSubmit}>Get My Recipes</Button>
                <Button   className={classes.button} variant="contained" color="primary" fullWidth onClick={handleSubmit}>Get Liked Recipes</Button>    
                <div className={classes.gridContainer}>
                    {recipes.map(recipe =>(
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