import React, { useState} from 'react';
import { TextField, Button, Typography, Paper, Container} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import useStyles from './styles';
import {createUser} from '../../actions/users';

const RegistrationForm = ()=>{
    const [postData, setPostData] = useState({firstName: '', lastName: '', email: '', password: ''});
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createUser(postData))
            .then((payload) =>{
                if(payload.success = "true"){
                    alert(payload.message);
                    window.location.href = "/login";
                }
                else{
                    alert("Unsuccessful Sign Up");
                    window.location.href = "/register";
                }
            });
    }

    return(
        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className = {classes.form} onSubmit = {handleSubmit}>
                <Typography variant="h6"> Please Sign-Up below </Typography>
                <TextField
                    className={classes.formElement} 
                    name="firstName"
                    variant="outlined"
                    label="firstName"
                    fullWidth
                    value={postData.firstName}
                    onChange={(e) => setPostData({...postData, firstName: e.target.value})}
                />
                <TextField
                    className={classes.formElement} 
                    name="lastName"
                    variant="outlined"
                    label="lastName"
                    fullWidth
                    value={postData.lastName}
                    onChange={(e) => setPostData({...postData, lastName: e.target.value})}
                />
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
                <Button className={classes.buttonSubmit} variant="contained" type="submit" fullWidth>Register</Button>              
            </form>
            <Container className={classes.allowLogin}>
                <Typography variant="h6"> Already have an account ?</Typography>
                <Link to="/login">
                <Button  variant="contained" className={classes.button} width="80">Login Here</Button>              
                </Link>
            </Container>
        </Paper>
    );
}

export default RegistrationForm;