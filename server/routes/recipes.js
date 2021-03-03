import express from 'express';
import {getRecipes, createRecipe, getUserRecipes, getSearchRecipes, addFavouriteRecipes, getFavouriteRecipes, removeFavRecipe, deleteRecipe} from '../controller/recipe.js';

const router = express.Router();

router.get('/get', getRecipes);
router.post('/create', createRecipe);
router.post('/getUserRecipes', getUserRecipes);
router.post('/getSearch', getSearchRecipes);
router.post('/addFavourite', addFavouriteRecipes);
router.post('/getFavourite', getFavouriteRecipes);
router.post('/removeFavourite', removeFavRecipe);
router.post('/removeRecipe', deleteRecipe);
export default router;