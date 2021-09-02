import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  titleDiv:{
    overflow: 'hidden',
    display: 'block',
    width: '70%',
    marginRight: '1rem',
  },
  title: {
    fontSize: '1.5rem',
    color: 'white',
    fontFamily: `'Pacifico', cursive`,
    color: '#0cad92',
    lineHeight: '1.3em',
  },
  calories: {
    backgroundColor: '#0cad92',
    color: 'white',
    textAlign: 'center',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    padding: '0.5rem',
    borderRadius: '10px',
    display: 'inline-block',
    width: '30%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  caloriesText:{
    marginTop: '0.0625rem',
    marginBottom: '0.0625rem',
  },
  caloriesLabel:{
    marginTop: '0.0625rem',
    marginBottom: '0.0625rem',
  },
  ingredients: {
    height:'80%',
    overflowY: 'scroll',
    textAlign: 'left',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  ingredientLabel:{
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#0cad92',
  },
  ingredientX: {
    paddingTop: '10px',
    paddingBottom: '10px',
    listStyleType: 'none',
    borderBottom: '2px solid #0cad92',
    marginRight: '10%',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  
  images: {
    width: '100%',
  },
  image:{
      width: '100%',
      height: '100%',
      objectFit: 'contain',
  },
  favButton: {
    backgroundColor: 'red',
    width: '0.5rem',
    height: '3rem',
    "&:hover": {
      backgroundColor: 'white',
      color:'#3CB371',
      border: '2px solid #3CB371'
    },
    color: 'white'
  }
});