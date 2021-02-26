import express from 'express';
import {getRecipes, createRecipe} from '../controller/recipe.js';

const router = express.Router();

router.get('/', getRecipes);
router.post('/create', createRecipe);

export default router;