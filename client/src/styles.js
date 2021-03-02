import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        marginLeft: '-8px',
        marginTop: '-2.5%',
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'left',
        backgroundColor: '#0cad92',
      },
      appBarNoMenu: {
        marginLeft: '-8px',
        marginTop: '-5%',
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'left',
        backgroundColor: '#0cad92',
      },
      heading: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        wordWrap: 'break-word',
        display: 'block',
        lineHeight: '2em',
        maxHeight: '5em',
        paddingLeft: '15px',
        color: 'white',
      },
      menu: {
        
        backgroundColor: '#0cad92',
      },
      menuItem: {
        marginLeft: '10px',
        height: '50px',
        float: 'left',
        "&:hover": {
          backgroundColor: "Teal"
        }
      },
      logout: {
        height: '50px',
        float: 'right',
        marginRight: '10px',
        "&:hover": {
          backgroundColor: "Teal"
        }
      },
      menuList: {
        marginLeft: '-10px',
        listStyleType: 'none',
        padding: '0',
        paddingRight: '10px',
        overflow: 'hidden',
        backgroundColor: '#0ABDA0',
        position: 'fixed',
        marginTop: '-2.5%',
        width: '100.5%',
        
      },

      menuLinks: {
        display: 'block',
        textAlign: 'center',
        paddingTop: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
        color: 'white',
      },
}));