import react, {useState} from 'react';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import { TextField, Button, Typography, Paper, Container} from '@material-ui/core';

import Recipe from '../recipes/recipe/recipe';
import {useDispatch} from 'react-redux';
import {getRecipes} from '../../actions/recipe';
const AccountPage = ()=>{
    const [recipes, setRecipes] = useState([]);
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(getRecipes())
            .then((payload) => {
                setRecipes(payload);
            });
    }
    return(
        <Paper className={classes.paper}>
            
            <Container className={classes.mainContainer}>
                <Typography variant="h5">Welcome to Roundabout Recipes</Typography>
                <Typography variant="h6">Please Register or Login to make full use of our services</Typography>
                
                <Link className={classes.authOptionContainer} to="/createRecipe">
                    <Button  className={classes.button} variant="contained" color="primary" fullWidth>createRecipe</Button>
                </Link>
                
                <Button   className={classes.button} variant="contained" color="primary" fullWidth onClick={handleSubmit}>get recipes</Button>    
                
                <div className={classes.gridContainer}>
                    {recipes.map(recipe =>(
                        <Recipe
                        key={recipe.name}
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