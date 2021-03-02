import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
      marginLeft: '8%',
      marginTop: '5%',
      width: '80%',
      padding: theme.spacing(2),
    },
    mainContainer: {
      paddingBottom: '40%',
      marginTop: '5%',
      textAlign: 'center',
      justifyContent: 'center',
    },
    authOptionContainer: {
      marginTop: '5%',
      width: '40%',
      float: 'left',
      display: 'flex',
      flexWrap: 'wrap',
      paddingLeft: '5%',
      justifyContent: 'center',
      },
    button: {
      backgroundColor: '#0cad92',
      color:'white',
      "&:hover": {
        backgroundColor: "#ffaaff"
      }
    },
}));