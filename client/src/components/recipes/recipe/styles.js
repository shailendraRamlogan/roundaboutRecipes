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
    maxHeight: '750px',
    float: 'left',
    maxWidth: '80%',
    border: '1px solid rgba(0, 0, 0, 0.8)',
    paddingBottom: '2%',
    fontSize: '15px',
    textAlign: 'center',
    marginLeft: '10%',
    marginBottom: '5%',
    backgroundColor: 'white',
    borderRadius: '5%',
  },
  title: {
    marginTop: '5%',
    paddingTop: '10px',
    fontSize: '25px',
    backgroundColor: '#BF9D7A',
    color: 'white',
  },
  ingredientX: {
    listStyleType: 'none',
    borderBottom: '2px solid black',
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
  images: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
    backgroundColor: '#EBF2EA',
  },
  favButton: {
    backgroundColor: '#3CB371',
    "&:hover": {
      backgroundColor: "#2E8B57"
    },
    color: 'white'
  }
});