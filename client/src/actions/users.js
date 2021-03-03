import * as api from '../api';

export const createUser = (user) => async (dispatch) =>{
    try {
        const {data} = await api.createUser(user);
        dispatch({type: 'CREATE', payload: data});
        return(data);
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = (credentials) => async (dispatch) =>{
    try {
        const {data} = await api.loginUser(credentials);
        dispatch({type: 'LOGIN', payload: data});
        return (data);

    } catch (error) {
        console.log(error);
    }
}


export const logoutUser = (token) => async (dispatch) =>{
    try {
        const {data} = await api.logoutUser(token);
        dispatch({type: 'LOGOUT', payload: data});
        return (data);

    } catch (error) {
        console.log(error);
    }
}

export const findUser = (token) => async (dispatch) =>{
    try {
        console.log(token);
        const {data} = await api.findUser(token);
        dispatch({type: 'FINDUSER', payload: data});
        return (data);

    } catch (error) {
        console.log(error);
    }
}
