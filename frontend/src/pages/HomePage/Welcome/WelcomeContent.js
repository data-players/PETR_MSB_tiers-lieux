import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import FullWidthBox from '../../../commons/FullWidthBox';
import LargeContainer from '../../../commons/LargeContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  subtitleText: {
    color: theme.palette.white.main,
    textAlign: 'center',
    maxWidth: 898,
    marginLeft: 40,
    marginRight: 40,
    fontWeight: 600,
    fontSize: '120%',
    lineHeight: '150%',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  container: {
    zIndex: 0,
    backgroundImage:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.56) 0%,rgba(0, 0, 0, 0) 100%),url('" +
      /*process.env.PUBLIC_URL*/
      "https://images.unsplash.com/photo-1620679380601-f6cc0a9f8d6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')",
    backgroundClip: 'padding-box',
    backgroundPosition: 'center -40px',
    backgroundRepeat: 'no-repeat',
    height: 539,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      margin: '0px',
      height: '400px',
    },
  },
}));

const WelcomeContent = () => {
  const classes = useStyles();
  return (
    <FullWidthBox className={classes.root}>
      <LargeContainer className={classes.container}>
        <Box display="flex" justifyContent="center" flexDirection="column" justifySelf="center">
          <Typography variant="body1" className={classes.subtitleText} component="div">
            Le réseau des tiers lieux du territoire Mâconnais Sud Bourgogne. Mailler le territoire et le mettre en réseau pour permettre à chacune et chacun de disposer de ces espaces et services
          </Typography>
        </Box>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default WelcomeContent;
