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
  subtitle: {
    display: 'block',
    fontSize: 20,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
    border: '1px solid lightgrey',
    '& a': {
      color: theme.palette.primary.contrastText,
    }
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
  tabbedShowLayout: {
    marginTop: -16,
    '& > *': {
      padding: 0,
    },
    '& > *:not(:last-child)': {
      display: 'none'
    }
  },
  modal: {
    position: 'fixed',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    top: '5%',
    right: '5%',
    bottom: '5%',
    left: '5%',
    zIndex: 99999,
    padding: '32px !important',
    background: 'rgb(240, 240, 240)',
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      top: '10%',
      right: '10%',
      bottom: '10%',
      left: '10%',
    },
    [theme.breakpoints.up('md')]: {
      padding: '64px !important',
    },

  },
  modalCloseIcon: {
    position: 'fixed',   
    top: 'calc(5% + 8px)',
    right: 'calc(5% + 8px)',
    transform: 'scale(1.25)',
    color: 'black',
    opacity: 0.75,
    cursor: 'pointer',
    '&:hover': {
      opacity: 1,
    },
    [theme.breakpoints.up('sm')]: {
      top: 'calc(10% + 8px)',
      right: 'calc(10% + 8px)',
    },
    [theme.breakpoints.up('md')]: {
      top: 'calc(10% + 16px)',
      right: 'calc(10% + 16px)',
    },
  }
}));

export default OrganizationShowUseStyles;
