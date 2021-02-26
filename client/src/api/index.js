import axios from 'axios';

const authUrl = 'http://localhost:5000/user';
const recipeUrl = 'http://localhost:5000/recipes';

export const createUser = (newUser) => axios.post(`${authUrl}/create`, newUser);
export const loginUser = (user) => axios.post(`${authUrl}/login`, user);
export const logoutUser = (token) => axios.get(`${authUrl}/logout`, token);
export const findUser = (usertoken) => axios.post(`${authUrl}/find`, usertoken);
export const createRecipe = (recipe) => axios.post(`${recipeUrl}/create`, recipe);
