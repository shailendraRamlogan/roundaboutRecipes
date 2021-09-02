import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  paper: {
    backgroundColor:'white',
    maxWidth: '80rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '4rem',
    paddingBottom: '4rem',
  },
  searchContainer:{
    maxWidth: '80rem',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  heading: {
    marginTop: '5%',
    paddingTop: '5%',
    '@media (max-width: 1600px)' : {
      paddingTop: '15%',
    },
    textAlign: 'center',
    color: 'black',
    fontFamily: `'Pacifico', cursive`,
  },
  searchForm: {
    minHeight: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    width: '50%',
    border: 'none',
    padding: '10px',
    backgroundColor: '#ffd4f0',
  },
  searchButton: {
    background: '#0cad92',
    border: 'none',
    padding: '10px 20px',
    color: 'white',
    "&:hover": {
      backgroundColor: "#ffaaff"
    }
  },
  gridContainer: {
    display: 'grid',
    maxWidth: '80rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1rem',
    gridTemplateColumns: 'repeat(4, 1fr)',
    '@media (max-width: 1600px)' : {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    '@media (max-width: 900px)' : {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 600px)' : {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
    gap: '1rem',
  },
}));