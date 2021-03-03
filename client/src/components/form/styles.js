import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    marginLeft: '25%',
    marginTop: '5%',
    width: '50%',
    padding: theme.spacing(2),
  },
  form: {
    marginTop: '5%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
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
    marginTop:"5%",
    marginBottom:"5%",
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
    marginTop: '2.5%',
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
    marginTop: '5%',
    '@media (max-width: 1600px)' : {
      marginTop: '15%',
    },
  },
  imageUpload: {
    backgroundColor: 'red'
  },
}));