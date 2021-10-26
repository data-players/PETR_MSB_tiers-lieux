import React from 'react';
import { IconButton, useMediaQuery, makeStyles, Typography, Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
    color: theme.palette.secondary.main,
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
}));

const Footer = ({ title }) => {
  
  const classes = useStyles();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  
  return (
    <FullWidthBox className={classes.background} >
      <LargeContainer disableGutters={xs}>
        <Grid container className={classes.root}>
          <Grid container>
            <Box pt={3} pb={5} className={classes.boxContainer}>
              <Typography variant="" color="secondary" className={classes.linkContainer}>
                <Link to="/" className={classes.footerLink}>
                  PETR
                </Link>
                <Link to="/" className={classes.footerLink}>
                  LAB71
                </Link>
                <Link to="/" className={classes.footerLink}>
                  La pépi't
                </Link>
                <Link to="/" className={classes.footerLink}>
                  Coworking Dompierre
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid container className={classes.footerBottom}>
            <Grid item xs={12} md={4} className={classes.contact}>
              <Typography variant="" className={classes.footerTitle}>
                Nous contacter :
              </Typography>
              <Typography variant="">
                contact@reseau-tiers-lieux-msb.fr
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="" className={classes.footerTitle}>
                Accès direct :
              </Typography>
              <Typography variant="" color="secondary" className={classes.linkContainer}>
                <Link to="/Map" className={classes.footerLink}>
                  Carte des lieux
                </Link>
                <Link to="/Search" className={classes.footerLink}>
                  Recherche
                </Link>
                <Link to="/About" className={classes.footerLink}>
                  Qui sommes-nous ?
                </Link>
                <Link to="/" className={classes.footerLink}>
                  Mentions&nbsp;légales
                </Link>
              </Typography>
            </Grid>
          </Grid>

          {/*
          <Grid item sm={3}>
            <IconButton
              aria-label="facebook"
              color="secondary"
              href="https://www.facebook.com/Les-Chemins-de-la-Transition-103307098592299"
              className={classes.icon}
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="instagram" color="secondary" disabled>
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="twitter" color="secondary" href="https://twitter.com/CdlT_Occitanie">
              <TwitterIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="youtube" color="secondary" disabled>
              <YoutubeIcon fontSize="large" />
            </IconButton>
          </Grid>
          */}
        </Grid>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default Footer;
