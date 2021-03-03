import axios from 'axios';

const authUrl = 'http://localhost:5000/user';
const recipeUrl = 'http://localhost:5000/recipes';

export const createUser = (newUser) => axios.post(`${authUrl}/create`, newUser);
export const loginUser = (user) => axios.post(`${authUrl}/login`, user);
export const logoutUser = (token) => axios.get(`${authUrl}/logout`, token);
export const findUser = (usertoken) => axios.post(`${authUrl}/find`, usertoken);
export const createRecipe = (recipe) => axios.post(`${recipeUrl}/create`, recipe);
export const getRecipes = () => axios.get(`${recipeUrl}/get`);
export const getUserRecipes = (userToken) => axios.post(`${recipeUrl}/getUserRecipes`, userToken);
export const getSearchRecipes = (query) => axios.post(`${recipeUrl}/getSearch`, query);
export const addFavouriteRecipes = (credentials) => axios.post(`${recipeUrl}/addFavourite`, credentials);
export const getFavouriteRecipes = (userToken) => axios.post(`${recipeUrl}/getFavourite`, userToken);
export const removeFavouriteRecipes = (data) => axios.post(`${recipeUrl}/removeFavourite`, data);
export const removeRecipes = (data) => axios.post(`${recipeUrl}/removeRecipe`, data);