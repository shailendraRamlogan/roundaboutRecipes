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