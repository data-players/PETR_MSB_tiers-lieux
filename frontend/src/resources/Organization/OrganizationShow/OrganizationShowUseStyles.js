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
    background: '#e13384',
    color: 'white',
    fontWeight: "bold"
  },
  subtitle: {
    display: 'block',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
    border: '1px solid lightgrey',
    background: '#e13384',
    color: 'white',
    fontWeight: "bold"
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
  contactFields: {
    textAlign:"left"
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
    color: theme.palette.primary.main
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
      marginLeft: '450px',
    marginTop: '275px',
    marginRight: '175px',
    borderRadius: '10px'
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
      marginTop: '115px',
      marginRight:'75px',
    },
  },
  contactBox: {
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "5px"
  },
  contactItem: {
    paddingLeft:"10px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  label: {
    fontWeight: 'bold'
  }
}));

export default OrganizationShowUseStyles;
