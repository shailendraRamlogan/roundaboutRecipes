import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },

  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  gridItem: {
    height: '750px',
    float: 'left',
    width: '100%',
    border: '1px solid rgba(0, 0, 0, 0.8)',
    paddingBottom: '2%',
    fontSize: '15px',
    textAlign: 'center',
    marginBottom: '5%',
    backgroundColor: 'white',
    borderRadius: '5%',
  },
  title: {
    marginTop: '10%',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontSize: '25px',
    backgroundColor: '#BF9D7A',
    color: 'white',
  },
  ingredientX: {
    listStyleType: 'none',
    borderBottom: '2px solid black',
  },
  removeIngredientButton:{
    marginRight: '5%',
    borderRadius: '10px',
    "&:hover": {
      backgroundColor: "#dc143c"
    },
  },
  form: {
    paddingTop: '2%',
    paddingBottom: '5%',
  },
  calories: {
    color: 'red',
    marginTop: '-3%',
  },
  ingredients: {
    backgroundColor: '#D4DCA9',
    height:'20%',
    
    textAlign: 'left',
    paddingTop: '10px',
    paddingBottom: '40px',
    overflowY: 'scroll',
    border: '5px solid #BF9D7A',
    borderRadius: '15px',
  },
  ingredient:{
    backgroundColor: '#dcdcdc',
  },
  ingredientName:{
    width: '100%',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    backgroundColor: '#f4f0ec',
  },
  images: {
    paddingTop: '20px',
    paddingBottom: '10px',
    marginTop: '-3%',
    backgroundColor: '#EBF2EA',
  },
  favButton: {
    backgroundColor: '#DC143C',
    "&:hover": {
      backgroundColor: "#B22222"
    },
    color: 'white'
  }
});