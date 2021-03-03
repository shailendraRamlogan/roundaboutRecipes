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
    marginLeft: '5%',
    marginTop: '5%',
    width: '90%',
    padding: theme.spacing(2),
  },
  page: {
    minHeight: '100vh',
    paddingBottom: '5%',
  },
  heading: {
    marginTop: '5%',
    paddingTop: '5%',
    '@media (max-width: 1600px)' : {
      paddingTop: '15%',
    },
    textAlign: 'center',
    color: 'white',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  heading1: {
    marginBottom: '2.5%',
    textAlign: 'center',
    color: 'white',
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
    gridTemplateColumns: 'repeat(3, 1fr)',
    '@media (max-width: 1600px)' : {
      gridTemplateColumns: 'repeat(2, 1fr)',
      marginLeft: '-3%',
    },
    gap: '10px',
  },
}));