import React,{useState, useEffect} from 'react';

import { useDispatch } from 'react-redux';
import Recipe from './recipe/recipe.js';
import useStyles from './styles';
import {getRecipes, getSearchRecipes} from '../../actions/recipe';
import { TextField, Button, Typography, Paper, Container} from '@material-ui/core';
const SearchPage = () => {
    const classes = useStyles();

    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState({param: ""});
    const dispatch = useDispatch();
  
    window.onload = async (e) => {
      e.preventDefault();
      dispatch(getRecipes())
        .then((payload) =>{
          setRecipes(payload);
        });
    }
  
    const updateSearch = (e) =>{
      setQuery({...query, param: e.target.value});
      
    }
  
    const getSearch = (e) => {
      e.preventDefault();
      //console.log(query);
      dispatch(getSearchRecipes(query))
        .then((payload) =>{
          if(payload.success === true){
            setRecipes(payload.recipes);
          }
          else{
            alert(payload.message);
          }
        });
      
      setQuery({...query, param: ""});
    };


    return(
        <div className={classes.page}>
        <div className={classes.searchContainer}>
        <h1 className={classes.heading}>Please enter a ingredient you want to cook with !</h1>
        <form onSubmit={getSearch} className={classes.searchForm}>
          <input className={classes.searchBar} type="text" value={query.param} onChange={updateSearch}/>
          <button className={classes.searchButton} type="submit">Search</button>
        </form>
        </div>
        <div className={classes.paper}>
        <div className={classes.gridContainer}>
          {recipes.map(recipe =>(
            <Recipe
            key={recipe._id}
            id={recipe._id}
            title={recipe.name}
            calories={recipe.calories}
            image={recipe.image} 
            ingredients={recipe.ingredients}
            />
          ))}
        </div>
        </div>
        </div>
      );
    
};

export default SearchPage;
