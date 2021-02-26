import React, { useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper, Container} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import {loginUser} from '../../actions/users';
import useStyles from './styles';
const LoginForm = ()=>{
    const [postData, setPostData] = useState({email: '', password: ''});
    const classes = useStyles();
    const dispatch = useDispatch();
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(loginUser(postData))
            .then((payload) => {
                if(payload.success === true){
                    localStorage.setItem('roundaboutToken', payload.token);
                    alert(payload.message);
                    window.location.href = "/searchpage";
                }
                else{
                    alert(payload.message);
                    window.location.href = "/login";
                }
                
            });
    }

    return(
        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className = {classes.form} onSubmit = {handleSubmit}>
                <Typography variant="h6"> Please Login below using your credentials</Typography>
                <TextField 
                    className={classes.formElement}
                    name="email"
                    variant="outlined"
                    label="email"
                    fullWidth
                    value={postData.email}
                    onChange={(e) => setPostData({...postData, email: e.target.value})}
                />
                <TextField 
                    className={classes.formElement}
                    name="password"
                    type="password"
                    variant="outlined"
                    label="password"
                    fullWidth
                    value={postData.password}
                    onChange={(e) => setPostData({...postData, password: e.target.value})}
                />
                <Button className={classes.buttonSubmit} variant="contained" type="submit" fullWidth>Submit</Button>              
            </form>
            <Container className={classes.allowLogin}>
                <Typography variant="h6"> Still need an account ?</Typography>
                <Link to="/register">
                <Button  variant="contained" className={classes.button} width="80">Register Here</Button>              
                </Link>
            </Container>
        </Paper>
    );
}

export default LoginForm;