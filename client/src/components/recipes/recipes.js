import React,{useState, useEffect} from 'react';

import { useDispatch } from 'react-redux';
import Recipe from './recipe/recipe.js';
import useStyles from './styles';
import {getRecipes} from '../../actions/recipe';

const SearchPage = () => {
    const classes = useStyles();

    const [recipes, setRecipes] = useState([]); 
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
  
    const getItems = async (e) => {
      e.preventDefault();
      dispatch(getRecipes())
        .then((payload) =>{
          setRecipes(payload);
        });
    }
  
    const updateSearch = e =>{
      setSearch(e.target.value);
      
    }
  
    const getSearch = e => {
      e.preventDefault();
      //setParameter(search);
      setSearch("");
    };


    return(
        <div className={classes.page}>
        <h1 className={classes.heading}>Please enter a ingredient you want to cook with !</h1>
        <form onSubmit={getItems} className={classes.searchForm}>
          <input className={classes.searchBar} type="text" value={search} onChange={updateSearch}/>
          <button className={classes.searchButton} type="submit">Search</button>
        </form>
        <h2 className={classes.heading1}>All of these recipes include</h2>
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
        </div>
      );
    
};

export default SearchPage;
