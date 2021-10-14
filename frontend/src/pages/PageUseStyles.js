import { makeStyles } from '@material-ui/core';

const PageUseStyles = makeStyles((theme) => ({
  mainContainer: {
    width: '80%',
    maxWidth: 800,
    margin: 'auto',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    '& > *' : {
      marginBottom: theme.spacing(2),
    }
  },
  textAlignCenter: {
    textAlign: 'center'
  }
}));

export default PageUseStyles;