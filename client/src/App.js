import React, { useEffect } from 'react';
import {Container, AppBar, Typography, Grow, Grid, Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {logoutUser} from './actions/users';
import SearchPage from './components/recipes/recipes.js';
import LoginForm from './components/form/loginForm';
import RegistrationForm from './components/form/registrationForm';
import CreateRecipeForm from './components/form/createRecipeForm';
import LandingPage from './components/landingPage/landingPage';
import AccountPage from './components/accountPage/accountPage';
import useStyles from './styles';



const App = () =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const isLoggedIn = localStorage.getItem('roundaboutToken');

    if(isLoggedIn){
    const logout = async (e) =>{
        e.preventDefault();
        const token = {
            token: isLoggedIn
        }
        dispatch(logoutUser(token))
            .then((payload) =>{
                console.log(payload);
                alert(payload.message);
                localStorage.removeItem('roundaboutToken');
                window.location.href = "/landingPage";
            });
        
    }
    return(
        <div>
            <AppBar className={classes.appBar} position= "static" color= "inherit">
            <   ul className={classes.menuList}>
                    <li className={classes.menuItem}><Button className={classes.menuLinks} href="/searchpage">Search For Recipes</Button></li>
                    <li className={classes.menuItem}><Button className={classes.menuLinks} href="/account">Account</Button></li>
                    <Button className={classes.logout} onClick={logout}> Logout </Button>
                </ul>
                <Typography className={classes.heading} variant="h2" align="left">Roundabout Recipes</Typography>                
            </AppBar>
                    
                    
            

            <BrowserRouter>
                <Switch>
                    <Route path="/searchpage">
                        <SearchPage />
                    </Route>
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                    <Route path="/register">
                        <RegistrationForm />
                    </Route>
                    <Route path="/account">
                        <AccountPage />
                    </Route>
                    <Route path="/createRecipe">
                        <CreateRecipeForm />
                    </Route>
                    <Route component={SearchPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
    }
    else if(!isLoggedIn){
        return(
            <div>
                <AppBar className={classes.appBarNoMenu} position= "static" color= "inherit">
                    <Typography className={classes.heading} variant="h2" align="left">Roundabout Recipes</Typography>
                    
                </AppBar>                
    
                <BrowserRouter>
                    <Switch>
                        <Route path="/login">
                            <LoginForm />
                        </Route>
                        <Route path="/register">
                            <RegistrationForm />
                        </Route>
                        <Route component={LandingPage} />
                    </Switch>
                </BrowserRouter>
            </div>
       
        );
    }
}

export default App;