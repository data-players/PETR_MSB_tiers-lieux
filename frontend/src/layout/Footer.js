import React from 'react';
import { useMediaQuery, makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Stack, Grid } from '@mui/material';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  YouTube as YoutubeIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    width: '100%',
    margin: '0 4vw'
  },
  linkContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  footerLink: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    textDecoration: 'none',
    lineHeight: '28px',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:lastChild': {
      marginRight: '0',
    },
  },
  footerBottom: {
    '&>*': {
      marginBottom: theme.spacing(3),
    }
  },
  footerTitle: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  background: {
    borderTop: '1px solid lightgrey',
    marginTop: theme.spacing(8), 
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
  },
  root: {
    paddingTop: '40px',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
  logo: {
    height: 77,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 20
    },
  },
  /*
  socialLinksText: {
    marginBottom: 12,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0
    },
  },
  */
  icon: {
    paddingLeft: 0
  },
  mail:{
    color: theme.palette.primary.main,
  }
}));

const Footer = ({ title }) => {
  
  const classes = useStyles();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  
  return (
    <FullWidthBox className={classes.background} >
      <LargeContainer disableGutters={xs}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
          >
                <Link to="/Page/https%3A%2F%2Fdata.petr-msb.data-players.com%2Fpages%2F65f1c3d3131f6f1608b1837b/show" className={classes.footerLink}>
                  Nous contacter
                </Link>
                <Link to="/" className={classes.footerLink}>
                  Carte des lieux
                </Link>
                <Link to="/Search" className={classes.footerLink}>
                  Recherche
                </Link>
                <Link to="/Page/https%3A%2F%2Fdata.petr-msb.data-players.com%2Fpages%2F65f05980d716091d235de473/show" className={classes.footerLink}>
                  Qui sommes-nous ?
                </Link>
                <Link to="/Page/https%3A%2F%2Fdata.petr-msb.data-players.com%2Fpages%2F65f06b5ed716091d235de474/show" className={classes.footerLink}>
                  Mentions&nbsp;légales
                </Link>
                <a href="https://www.etablir-tiers-lieux.fr" className={classes.footerLink} target="_blank">
                  Site vitrine
                </a>
          </Stack>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default Footer;
