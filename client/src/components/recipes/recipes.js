import React,{useState, useEffect} from 'react';

import { useSelector } from 'react-redux';
import Recipe from './recipe/recipe.js';
import useStyles from './styles';

const SearchPage = () => {
    const classes = useStyles();
    const apiID = "4b32607e";
    const apiKey = "9338c4a069265404e9290dbea3ee04c9";
    
    const [recipes, setRecipes] = useState([]); 
    const [search, setSearch] = useState("");
    const [parameter, setParameter] = useState('chicken');
  
    useEffect(() => {
      getRecipes();
    }, [parameter]);
  
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${parameter}&app_id=${apiID}&app_key=${apiKey}`);
      const data = await response.json();
      setRecipes(data.hits);
      //console.log(data.hits);
    };
  
    const updateSearch = e =>{
      setSearch(e.target.value);
    };
  
    const getSearch = e => {
      e.preventDefault();
      setParameter(search);
      setSearch("");
    };


    return(
        <div className={classes.page}>
        <h1 className={classes.heading}>Please enter a ingredient you want to cook with !</h1>
        <form onSubmit={getSearch} className={classes.searchForm}>
          <input className={classes.searchBar} type="text" value={search} onChange={updateSearch}/>
          <button className={classes.searchButton} type="submit">Search</button>
        </form>
        <h2 className={classes.heading1}>All of these recipes include {parameter}</h2>
        <div className={classes.gridContainer}>
          {recipes.map(recipe =>(
            <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
        </div>
      );
    
};

export default SearchPage;
