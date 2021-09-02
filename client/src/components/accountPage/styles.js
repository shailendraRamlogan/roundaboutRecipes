import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        marginLeft: '4.5%',
        marginTop: '5%',
        width: '90%',
        padding: theme.spacing(2),
    },
    navContainer:{
      color: 'black',
      fontFamily: `'Pacifico', cursive`,
      fontSize: '34px',
      maxWidth: '80rem',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    mainContainer: {
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: '4rem',
        paddingBottom: '4rem',
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
      borderRadius:'10px',
      marginLeft: '1rem',
      marginRight: '1rem',
      marginTop: '1rem',
      width: '30%',
        backgroundColor: '#0cad92',
        color:'white',
        "&:hover": {
          backgroundColor: "#ffaaff",
          color: '#0cad92'
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
        '@media (max-width: 830px)' : {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@media (max-width: 600px)' : {
          gridTemplateColumns: 'repeat(1, 1fr)',
        },
        gap: '1rem',
      },
}));