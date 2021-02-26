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
  page: {
    minHeight: '100vh',
    paddingBottom: '5%',
  },
  heading: {
    marginTop: '5%',
    paddingTop: '5%',
    textAlign: 'center',
    color: 'white',
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
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
  },
}));