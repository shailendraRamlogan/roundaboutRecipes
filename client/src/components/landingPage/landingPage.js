import react from 'react';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import { TextField, Button, Typography, Paper, Container} from '@material-ui/core';


const LandingPage = ()=>{
    const classes = useStyles();
    return(
        <Paper className={classes.paper}>
            
            <Container className={classes.mainContainer}>
                <Typography variant="h5">Welcome to Roundabout Recipes</Typography>
                <Typography variant="h6">Please Register or Login to make full use of our services</Typography>
                
                <Link className={classes.authOptionContainer} to="/register">
                    <Button variant="contained" className={classes.button} fullWidth>Register</Button>
                </Link>
                <Link className={classes.authOptionContainer} to="/login">
                    <Button  variant="contained" className={classes.button} fullWidth>Login</Button>    
                </Link>
                
            </Container>
        </Paper>
    );
}

export default LandingPage;