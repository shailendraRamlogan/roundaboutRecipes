import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        marginLeft: '4.5%',
        marginTop: '5%',
        width: '90%',
        padding: theme.spacing(2),
    },
    navContainer:{
      paddingTop: '15%',
      color: 'white',
    },
    mainContainer: {
        marginTop: '5%',
        textAlign: 'center',
        justifyContent: 'center',
    },
    accountPageButton: {
        marginTop: '2.5%',
        width: '40%',
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: '5%',
        justifyContent: 'center',
      },
    button: {
      borderRadius:'0',
      marginLeft: '2%',
      marginTop: '2%',
      width: '30%',
        backgroundColor: '#0cad92',
        color:'white',
        "&:hover": {
          backgroundColor: "#ffaaff"
        }
      },
      gridContainer: {
        paddingBottom: '20%',
        marginTop: '5%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        '@media (max-width: 1600px)' : {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        gap: '2%',
      },
}));