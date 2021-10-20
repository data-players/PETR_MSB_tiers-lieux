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
    marginBottom: theme.spacing(2),
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
    position: 'absolute',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    top: '10%',
    right: '10%',
    bottom: '10%',
    left: '10%',
    zIndex: 99999,
    padding: '64px !important',
    background: 'rgb(240, 240, 240)',
    overflowY: 'auto',
  },
  modalCloseIcon: {
    position: 'absolute',   
    top: 16,
    right: 16,
    transform: 'scale(1.25)',
    color: 'black',
    opacity: 0.75,
    cursor: 'pointer',
    '&:hover': {
      opacity: 1,
    }
  }
}));

export default OrganizationShowUseStyles;
