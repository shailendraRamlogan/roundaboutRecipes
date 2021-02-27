import * as api from '../api';

export const createRecipe = (recipe) => async (dispatch) =>{
    try {
        const {data} = await api.createRecipe(recipe);
        dispatch({type: 'CREATE', payload: data});
        return(data);
    } catch (error) {
        console.log(error);
    }
}

export const getRecipes = () => async (dispatch) =>{
    try {
        const {data} = await api.getRecipes();
        dispatch({type: 'FETCHALL', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getUserRecipes = (token) => async (dispatch) =>{
    try {
        const {data} = await api.getUserRecipes(token);
        dispatch({type: 'FETCHUSERRECIPES', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getSearchRecipes = (query) => async (dispatch) =>{
    try {
        const {data} = await api.getSearchRecipes(query);
        dispatch({type: 'FETCHSEARCHRECIPES', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}


export const addFavouriteRecipes = (query) => async (dispatch) =>{
    try {
        const {data} = await api.addFavouriteRecipes(query);
        dispatch({type: 'ADDTOFAVOURIES', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}