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
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  gridItem: {
    height: '750px',
    minWidth: '350px',
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
  titleDiv:{
    marginTop: '10%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    display: 'block',
    lineHeight: '1.5em',
    maxHeight: '5em', 
    backgroundColor: '#BF9D7A',
  },
  title: {
    fontSize: '20px',
    color: 'white',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  ingredientX: {
    paddingTop: '10px',
    paddingBottom: '10px',
    listStyleType: 'none',
    borderBottom: '2px solid black',
    marginRight: '10%',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
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
  removeButton: {
    marginLeft: '5px',
    backgroundColor: '#DC143C',
    "&:hover": {
      backgroundColor: "#B22222"
    },
    color: 'white'
  },
  editButton: {
    backgroundColor: '#FFFF33',
    "&:hover": {
      backgroundColor: "#CCCC00"
    },
    color: 'black'
  }
});