import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const logoHeight = 71;
const logoHeightSM = 50;
const logoHeightXS = 40;
const breakPointlimit = 720;
const useStyles = makeStyles((theme) => ({
  logo: {
    height: logoHeightXS,
    verticalAlign: 'middle',
    [theme.breakpoints.up('sm')]: {
      height: logoHeightSM,
    },
    [theme.breakpoints.up('md')]: {
      height: logoHeight,
    },
  },
  logoBox: {
    height: logoHeightXS,
    [theme.breakpoints.up('sm')]: {
      height: logoHeightSM,
    },
    [theme.breakpoints.up('md')]: {
      height: logoHeight,
    },
  },
}));

const LogoTitle = ({ title, classes, ...other }) => {
  const classesLogo = useStyles();
  return (
    <Box className={classesLogo.logoBox} flexShrink={0} {...other}>
      <Link to="/" className={classes ? classes.menuLink : ''}>
        <Box display="flex" alignItems="center">
          <img src={process.env.PUBLIC_URL + '/etablir/Etablir_RVB.svg'} alt="logo" className={classesLogo.logo} />
        </Box>
      </Link>
    </Box>
  );
};

export default LogoTitle;
