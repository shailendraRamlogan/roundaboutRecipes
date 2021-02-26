import react from 'react';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import { TextField, Button, Typography, Paper, Container} from '@material-ui/core';


const AccountPage = ()=>{
    const classes = useStyles();
    return(
        <Paper className={classes.paper}>
            
            <Container className={classes.mainContainer}>
                <Typography variant="h5">Welcome to Roundabout Recipes</Typography>
                <Typography variant="h6">Please Register or Login to make full use of our services</Typography>
                
                <Link className={classes.authOptionContainer} to="/createRecipe">
                    <Button  className={classes.button} variant="contained" color="primary" fullWidth>createRecipe</Button>
                </Link>
                <Link className={classes.authOptionContainer} to="/login">
                    <Button   className={classes.button} variant="contained" color="primary" fullWidth>Login</Button>    
                </Link>
                
            </Container>
        </Paper>
    );
}

export default AccountPage;