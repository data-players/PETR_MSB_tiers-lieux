import { makeStyles } from '@material-ui/core';

const OrganizationShowUseStyles = makeStyles((theme) => ({
  innerContainer: {
    flexWrap: 'wrap',
    padding: theme.spacing(2),
    '& > *': {
      width: '100%',
      textAlign: 'center'
    },
  },
  title: {
    display: 'block',
    padding: theme.spacing(2),
    border: '1px solid lightgrey',
  },
  subtitle: {
    display: 'block',
    padding: theme.spacing(1),
    border: '1px solid lightgrey',
  },
  identityContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '& img': {
      margin: 0,
      marginRight: theme.spacing(1),
      width: '64px',
    },
  },
  contactContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  addressContainer: {
    '& > *': {
      width: '100%',
      textAlign: 'left'
    }
  },
  map: {
    marginBottom: theme.spacing(2)
  },
  description: {
    display: 'block',
    padding: theme.spacing(2),
  },
  images: {
    marginBottom: 15,
    '& img': {
      width: '100%',
      display: 'block',
      borderRadius: 8,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      objectFit: 'cover',
      margin: '5px 0 10px 0',
      height: '100%',
      maxHeight: '15rem',
      [theme.breakpoints.down('xs')]: {
        maxHeight: '8rem',
      }
    },
  },
}));

export default OrganizationShowUseStyles;
