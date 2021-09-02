import React, { useEffect } from 'react';
import {Container, AppBar, Typography, Grow, Grid, Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import sliderImage1 from './assets/images/slider1.jpg';
import sliderImage2 from './assets/images/slider2.jpg';
import sliderImage3 from './assets/images/slider3.jpg';
import logo from './assets/images/logo.png';
import 'react-awesome-slider/dist/styles.css';
import { slide as Menu } from 'react-burger-menu';
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
    const AutoplaySlider = withAutoplay(AwesomeSlider);
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

    const showSettings = (event) => {
        event.preventDefault();
    }
    return(
        <div>
            <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
            <AutoplaySlider play={false} cancelOnInteraction={true} interval={5000} className={classes.slider}>
                <div data-src={sliderImage1}>
                <div className={classes.appBar}>
                        <div className={classes.logoContainer}>
                            <img className={classes.logo} src={logo}/>
                        </div>
                        <div className={classes.contactContainer}>
                            <ul className={classes.contactList}>
                                <li className={classes.contactItem}><a className="fa fa-envelope" href="mailto:roundaboutRecipes@gmail.com">&nbsp;&nbsp;&nbsp;roundaboutRecipes@gmail.com </a></li>
                                <li className={classes.contactItem}><a className="fa fa-phone-square" href="tel:+18681234567">&nbsp;&nbsp;&nbsp;+1(868)1234567 </a></li>
                                <li className={classes.contactItem}><a href="#" className="fa fa-facebook"></a></li>
                                <li className={classes.contactItem}><a href="#" className="fa fa-instagram"></a></li>
                                <li className={classes.contactItem}><a href="#" className="fa fa-twitter"></a></li>
                                
                            </ul>
       
                        </div> 
                        <div className={classes.menuContainer}>
                            <ul className={classes.menuList}>
                                
                                <BrowserRouter>
                                <li className={classes.menuItem}><Button className={classes.menuLinks} href="/searchpage"><Link to="/searchpage"></Link>Search For Recipes</Button></li>
                                <li className={classes.menuItem}><Button className={classes.menuLinks} href="/account"><Link to="/account"></Link>Account</Button></li>
                                </BrowserRouter>
                                <Button className={classes.logout} onClick={logout}> Logout </Button>
                            </ul> 
                        </div>
                                 
                    </div>
                </div>
                <div data-src={sliderImage2}>
                <div className={classes.appBar}>
                        <div className={classes.logoContainer}>
                            <img className={classes.logo} src={logo}/>
                        </div>
                        <div className={classes.contactContainer}>
                            <ul className={classes.contactList}>
                                <li className={classes.contactItem}><a className="fa fa-envelope" href="mailto:roundaboutRecipes@gmail.com">&nbsp;&nbsp;&nbsp;roundaboutRecipes@gmail.com </a></li>
                                <li className={classes.contactItem}><a className="fa fa-phone-square" href="tel:+18681234567">&nbsp;&nbsp;&nbsp;+1(868)1234567 </a></li>
                                <li className={classes.contactItem}><a href="#" className="fa fa-facebook"></a></li>
                                <li className={classes.contactItem}><a href="#" className="fa fa-instagram"></a></li>
                                <li className={classes.contactItem}><a href="#" className="fa fa-twitter"></a></li>

                            </ul>

                        </div> 
                        <div className={classes.menuContainer}>
                            <ul className={classes.menuList}>
                                
                                <BrowserRouter>
                                <li className={classes.menuItem}><Button className={classes.menuLinks} href="/searchpage"><Link to="/searchpage"></Link>Search For Recipes</Button></li>
                                <li className={classes.menuItem}><Button className={classes.menuLinks} href="/account"><Link to="/account"></Link>Account</Button></li>
                                </BrowserRouter>
                                <Button className={classes.logout} onClick={logout}> Logout </Button>
                            </ul> 
                        </div>
                                 
                    </div>
                </div>
                <div data-src={sliderImage3}>
                <div className={classes.appBar}>
                        <div className={classes.logoContainer}>
                            <img className={classes.logo} src={logo}/>
                        </div>
                        <div className={classes.contactContainer}>
                            <ul className={classes.contactList}>
                                <li className={classes.contactItem}><a className="fa fa-envelope" href="mailto:roundaboutRecipes@gmail.com">&nbsp;&nbsp;&nbsp;roundaboutRecipes@gmail.com </a></li>
                                <li className={classes.contactItem}><a className="fa fa-phone-square" href="tel:+18681234567">&nbsp;&nbsp;&nbsp;+1(868)1234567 </a></li>
                                <li className={classes.contactItem}><a href="#" className="fa fa-facebook"></a></li>
                                <li className={classes.contactItem}><a href="#" className="fa fa-instagram"></a></li>
                                <li className={classes.contactItem}><a href="#" className="fa fa-twitter"></a></li>

                            </ul>

                        </div> 
                        <div className={classes.menuContainer}>
                            <ul className={classes.menuList}>
                                
                                <BrowserRouter>
                                <li className={classes.menuItem}><Button className={classes.menuLinks} href="/searchpage"><Link to="/searchpage"></Link>Search For Recipes</Button></li>
                                <li className={classes.menuItem}><Button className={classes.menuLinks} href="/account"><Link to="/account"></Link>Account</Button></li>
                                </BrowserRouter>
                                <Button className={classes.logout} onClick={logout}> Logout </Button>
                            </ul> 
                        </div>
                                 
                    </div>
                </div>
            </AutoplaySlider>
          
                    
                    
            

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

            <div className={classes.footerContainer}>
                <div className={classes.footer}>
                    <div>
                        <ul className={classes.socialMedia}>
                            <li><a href="#" className="fa fa-twitter"></a></li>
                            <li><a href="#" className="fa fa-facebook"></a></li>
                            <li><a href="#" className="fa fa-instagram"></a></li>
                            <li><a href="#" className="fa fa-pinterest"></a></li>
                            <li><a href="#" className="fa fa-linkedin"></a></li>
                        </ul>
                        <p className={classes.mission}>Our Trust is concentrated on supplying wholesome recipes throughout Trinidad and the Caribbean Region</p>
                        <p className={classes.copyright}><strong>Roundabout Recipes Ltd</strong> <br/> © All rights reserved.</p>
                    </div>
                    <div>
                        <h2 className={classes.footerLabel}>Actions</h2>
                        <ul className={classes.actionList}>
                            <li><a href="#">Create a New Recipe</a></li>
                            <li><a href="#">Search for a Recipe</a></li>
                            <li><a href="#">Account</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className={classes.footerLabel}>Contact Us</h2>
                        <h6 className={classes.contactLabel}>Address: </h6>
                        <p className={classes.address}>#26 at an undisclosed location</p>
                        <h6 className={classes.contactLabel}>Phone: </h6>
                        <a className={classes.contactLinks} href="tel:+18681234567">+1-(868)-123-4567</a>
                        <h6 className={classes.contactLabel}>Email: </h6>
                        <a className={classes.contactLinks} href="mailto:roundaboutrecipes@gmail.com">roundaboutrecipes@gmail.com</a>
                    </div>

                </div>
            </div>
        </div>
    );
    }
    else if(!isLoggedIn){
        return(
            <div>
                <AutoplaySlider play={false} cancelOnInteraction={true} interval={5000} className={classes.slider}>
                    <div data-src={sliderImage1}>
                        <div style={{height: '100%'}}>
                            <div className={classes.logoContainer}>
                                <img className={classes.logo} src={logo}/>
                            </div>   
                        </div>
                    </div>
                    <div data-src={sliderImage2}>
                        <div style={{height: '100%'}}>
                            <div className={classes.logoContainer}>
                                <img className={classes.logo} src={logo}/>
                            </div>
                                    
                        </div>
                    </div>
                    <div data-src={sliderImage3}>
                        <div style={{height: '100%'}}>
                            <div className={classes.logoContainer}>
                                <img className={classes.logo} src={logo}/>
                            </div>
                                    
                        </div>
                    </div>
                </AutoplaySlider>               
    
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
                
                
                <div className={classes.footerContainer}>
                    <div className={classes.footer}>
                        <div>
                            <ul className={classes.socialMedia}>
                                <li><a href="#" className="fa fa-twitter"></a></li>
                                <li><a href="#" className="fa fa-facebook"></a></li>
                                <li><a href="#" className="fa fa-instagram"></a></li>
                                <li><a href="#" className="fa fa-pinterest"></a></li>
                                <li><a href="#" className="fa fa-linkedin"></a></li>
                            </ul>
                            <p className={classes.mission}>Our Trust is concentrated on supplying wholesome recipes throughout Trinidad and the Caribbean Region</p>
                            <p className={classes.copyright}><strong>Roundabout Recipes Ltd</strong> <br/> © All rights reserved.</p>
                        </div>
                        <div>
                            <h2 className={classes.footerLabel}>Actions</h2>
                            <ul className={classes.actionList}>
                                <li><a href="#">Create a New Recipe</a></li>
                                <li><a href="#">Search for a Recipe</a></li>
                                <li><a href="#">Account</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className={classes.footerLabel}>Contact Us</h2>
                            <h6 className={classes.contactLabel}>Address: </h6>
                            <p className={classes.address}>#26 at an undisclosed location</p>
                            <h6 className={classes.contactLabel}>Phone: </h6>
                            <a className={classes.contactLinks} href="tel:+18681234567">+1-(868)-123-4567</a>
                            <h6 className={classes.contactLabel}>Email: </h6>
                            <a className={classes.contactLinks} href="mailto:roundaboutrecipes@gmail.com">roundaboutrecipes@gmail.com</a>
                        </div>

                    </div>
                </div>
            </div>
       
        );
    }

}

export default App;