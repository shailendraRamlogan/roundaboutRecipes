import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    slider:{
      height: '50vh',
    },
    appBar: {
      display: 'grid',
      position: 'relative',
      zIndex: '10',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
      maxWidth: '80rem',
      height: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      alignItems: 'left',
      '@media (max-width: 800px)' : {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },

    },
    logoContainer:{
      gridRow: 'span 2 / span 2',
      marginTop: 'auto',
      marginBottom: 'auto',
      height: '100%',
      '@media (max-width: 800px)' : {
        gridColumn: 'span 1 / span 1',
        gridRow: 'span 1 / span 1',
        
      }
    },
    contactContainer:{
      zIndex: '10',
      position: 'relative',
      gridColumn: 'span 2 / span 2',
      gridColumnStart: '2',
      gridRowStart: '1',
      marginTop: 'auto',
      marginBottom: '2rem',
      '@media (max-width: 800px)' : {
        gridColumn: 'span 1 / span 1',
        gridRow: 'span 1 / span 1',
        marginTop: '1rem',
        marginBottom: '1rem',
        height: '5rem',
      }
    },
    contactList: {
      listStyle: 'none',
      textDecoration: 'none',
      fontSize: '18px',
      marginBlockStart: '0',
      marginBlockEnd: '0',
      paddingInlineStart: '0',
      "& li:nth-last-child(1)":{
        '@media (max-width: 800px)' : {
          display: 'inline',
        },
      },
      "& li:nth-last-child(2)":{
        '@media (max-width: 800px)' : {
          display: 'inline',
        },
      },
      "& li:nth-last-child(3)":{
        '@media (max-width: 800px)' : {
          display: 'inline',
        },
      },
    },
    contactItem:{
      display: 'inline',
      marginLeft: '1rem',
      "& a":{
      textDecoration: 'none',
      color: '#26A69A',
      "&:hover":{
        color: '#FF99DB'
      }
      },
      '@media (max-width: 800px)' : {
        display: 'block',
        marginTop: '1rem',
        marginBottom: '1rem',
      },
    },
    logo:{
      zIndex: '10',
      position: 'relative',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      '@media (max-width: 800px)' : {
        maxHeight: '13rem',
      },
    },
    menuContainer:{
      gridColumn: 'span 2 / span 2',
      width:'100%',
      '@media (max-width: 800px)' : {
        gridColumn: 'span 1 / span 1',
        gridRow: 'span 1 / span 1',
        display: 'none',
      }
      
    },
    menuList:{
      width: '100%',
      listStyle: 'none',
      marginBlockStart: '0',
      marginBlockEnd: '0',
      paddingInlineStart: '0',
      paddingLeft: '2rem',
      paddingRight: '2rem',
      '@media (max-width: 700px)' : {
        marginTop: '0rem',
        marginBottom: '0rem',
        paddingLeft: '0',
        paddingRight: '0',
      },
      '@media (max-width: 550px)' : {
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
      },
    },
    menuItem:{
      display: 'inline',
      paddingLeft: '1rem',
      width: '100%',
      '@media (max-width: 550px)' : {
        paddingLeft: '0rem',
      },
    },
    menuLinks:{
      backdropFilter: 'blur(5px)',
      fontWeight: '700',
      fontSize: '1.125rem',
      color: '#26A69A',
      border: '3px solid #26A69A',
      "&:hover":{
        border: '3px solid #26A69A',
        backgroundColor: 'black',
        color: '#FF99DB',
      },
      '@media (max-width: 550px)' : {
        width: '100%',
        marginTop: '1rem',
        marginBottom: '1rem', 
      }
    },
    logout:{
      backdropFilter: 'blur(5px)',
      fontWeight: '700',
      fontSize: '1.125rem',
      marginLeft: '1rem',
      color: '#26A69A',
      border: '3px solid #26A69A',
      "&:hover":{
        border: '3px solid #26A69A',
        backgroundColor: '#26A69A',
        color: 'red',
      },
      
      '@media (max-width: 550px)' : {
        width: '100%',
        marginTop: '1rem',
        marginBottom: '1rem', 
      }
    },
    footerContainer:{
      backgroundColor: '#282828',
    },
    footer:{
      maxWidth: '80rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: '3rem',
      paddingBottom: '3rem',
      padding: '1rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      color: 'white',
      '@media (max-width: 768px)' : {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      '@media (max-width: 600px)' : {
        gridTemplateColumns: 'repeat(1, 1fr)',
      }
    },
    socialMedia:{
      listStyleType: 'none',
      paddingInlineStart: '0',
      marginTop: '2rem',
      marginLeft: '1rem',
      marginRight: '1rem',
      "& li":{
        display: 'inline',
        marginRight: '1rem',
        "& a":{
          textDecoration: 'none',
          fontSize: '1.5rem',
          color: '#A0A0A0',
          "&:hover":{
            color: '#26A69A',
          }
        }
      }
    },
    mission:{
      marginTop: '2rem',
      marginBottom: '2rem',
      marginLeft: '1rem',
      marginRight: '1rem',
      fontFamily: 'cursive',
      lineHeight: '1.5',
      color: '#A0A0A0',
    },
    copyright:{
      marginTop: '2rem',
      marginBottom: '2rem',
      marginLeft: '1rem',
      marginRight: '1rem',
      fontFamily: 'cursive',
      lineHeight: '1.5',
      color: '#26A69A',
    }, 
    footerLabel: {
      marginLeft: '1rem',
      marginTop: '2rem',
      letterSpacing: '1px',
    },
    actionList:{
      listStyleType: 'none',
      marginBlockStart: '0',
      marginBlockEnd: '0',
      paddingInlineStart: '0',
      marginLeft: '1rem',
      "& li":{
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        fontFamily: 'cursive',
        
        "& a":{
          textDecoration:'none',
          color: '#A0A0A0',
          "&:hover":{
            color: '#26A69A',
          }
        }
      }
    },
    contactLabel:{
      fontSize: '1rem',
      marginLeft: '1rem',
      marginBottom: '0',
    },
    address:{
      marginLeft: '1rem',
      fontSize: '1rem',
      fontFamily: 'cursive',
      color: '#A0A0A0'
    },
    contactLinks:{
      textDecoration: 'none',
      fontSize: '1rem',
      marginLeft: '1rem',
      fontFamily: 'cursive',
      color: '#A0A0A0',
      "&:hover":{
        color: '#26A69A',
      }
    }
}));
