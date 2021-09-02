import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    marginTop: '5rem',
    marginBottom: '5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '80rem',
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '100%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#0cad92',
    color: 'white',
    "&:hover": {
      backgroundColor: "#ffaaff"
    }
  },
  ingredientsContainer:{
    marginTop:"4rem",
    marginBottom:"4rem",
  },
  addButton: {
    marginTop: 30,
    marginBottom: 5,
    backgroundColor: '#0cad92',
    color: 'white',
    "&:hover": {
      backgroundColor: "#ffaaff"
    }
  },
  formElement: {
    marginTop: '2rem',
  },
  allowLogin: {
    marginTop: '20px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0cad92',
    color: 'white',
    "&:hover": {
      backgroundColor: "#ffaaff"
    }
  },
  heading:{
    marginTop: '5rem',
    fontFamily: `'Pacifico', cursive`,
    '@media (max-width: 1600px)' : {
      marginTop: '10rem',
    },
  },
  imageUpload: {
    backgroundColor: 'red'
  },
}));