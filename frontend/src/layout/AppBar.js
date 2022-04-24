import React from 'react';
import { Box, makeStyles, Typography, AppBar as MuiAppBar, useMediaQuery, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useGetIdentity } from 'react-admin';
import { LogoutButton } from '@semapps/auth-provider';
import { Link, useHistory } from 'react-router-dom';
import LogoTitle from './LogoTitle';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import { UserMenu } from '@semapps/auth-provider';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.white.main,
    boxShadow: 'none',
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  menuLink: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  menuText: {
    textAlign: 'center',
    lineHeight: 1,
    color: theme.palette.primary.main,
  },
  linkBox: {
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    borderBottom: 'transparent 2px solid'
  },
  linkBoxSelected: {
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    borderBottom: `${theme.palette.primary.main} 2px solid`
  },
  loginBackground: {
    color: theme.palette.primary.main,
    '& .MuiButtonBase-root': {
      fontFamily: theme.typography.subtitle2.fontFamily,
      fontSize: theme.typography.subtitle2.fontSize,
      fontWeight: theme.typography.subtitle2.fontWeight,
      borderRadius: '50%',
      padding: 14,
      minWidth: 'unset',
      position:'relative',
      [theme.breakpoints.up('md')]: {
        borderRadius: 'unset',
        minWidth: 'initial',
        padding: 'initial',
      },
    },
    '& .MuiIconButton-colorInherit': {
      color: theme.palette.primary.main,
    },
    '& .MuiButton-label': {
      fontSize: 0,
      left: '4px',
      position: 'relative',
      [theme.breakpoints.up('sm')]: {
        fontSize: 'initial',
        left: '0px',
        marginRight: 8,
      }
    },
    '& .MuiButton-startIcon': {
      marginRight: 0,
      [theme.breakpoints.up('sm')]: {
        marginRight: 8,
      }
    },
    '& .MuiIconButton-label::after': {
      marginLeft: '0.5em',
      content: "'Se connecter'",
      fontSize: theme.typography.subtitle2.fontSize,
      fontWeight: theme.typography.subtitle2.fontWeight,
      // textTransform: theme.typography.subtitle2.textTransform,
      lineHeight: theme.typography.subtitle2.lineHeight,
      [theme.breakpoints.down('700')]: {
        content: 'none',
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiIconButton-root': {
        padding: '8px',
      },
    },
    '& .MuiIconButton-root': {
      borderRadius: '8px',
    },
  },
}));

const AppBar = ({ menuItems, setSidebarOpen, title, location, isAdminContext }) => {
  
  const { identity } = useGetIdentity();
  const isConnected = identity && identity.id;

  const classes = useStyles();
  const sm = useMediaQuery((theme) => theme.breakpoints.down('sm'), { noSsr: true });
  
  const history = useHistory()
  const handleClick = (link) => {
    if (link === '/Search' && location.pathname === '/Search') {
      history.go(0)
    }
  }
  
  return (
    <MuiAppBar position="sticky" className={classes.appBar}>
      <FullWidthBox>
        {sm ? (
          <Box width={1} display="flex" alignItems="center">
            <IconButton color="primary" onClick={() => setSidebarOpen(true)} className={classes.openButton}>
              <MenuIcon />
            </IconButton>
            <Box flexGrow={1} />
            <LogoTitle 
              title={title} 
              justifyContent="flex-start" 
              classes={{ menuLink: classes.menuLink }} 
            />
            <Box flexGrow={1} />
            <Box justifyContent="flex-end" className={classes.loginBackground}>
              <UserMenu logout={<LogoutButton />} />
            </Box>
          </Box>
        ) : (
          <LargeContainer className={classes.header}>
            <Box width={1} display="flex" alignItems="center">
              <LogoTitle 
                title={title} 
                justifyContent="flex-start" 
                classes={{ menuLink: classes.menuLink }}
              />
              <Box flexGrow={1} />
              <Box display="flex" justifyContent="center" width={1}>
                {menuItems.filter((menuItem) => {return isConnected || ! menuItem.admin }).map((menuItem) => (
                  <Box
                    display="flex"
                    height={40}
                    alignItems="center"
                    justifyContent="center"
                    className={ 
                      ( ( location.pathname.match('^' + menuItem.link + '(/.*)?$') && ! menuItem.admin )
                        || ( isAdminContext && menuItem.admin )
                      ) ? classes.linkBoxSelected 
                        : classes.linkBox
                    }
                    m={2}
                    key={menuItem.link}
                  >
                    <Link to={menuItem.link} className={classes.menuLink} onClick={()=>handleClick(menuItem.link)} >
                      <Typography variant="subtitle2" className={classes.menuText}>
                        {menuItem.name}
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
              <Box flexGrow={1} />
              <Box justifyContent="flex-end" className={classes.loginBackground}>
                <UserMenu logout={<LogoutButton />} />
              </Box>
            </Box>
          </LargeContainer>
        )}
      </FullWidthBox>
    </MuiAppBar>
  );
};

export default AppBar;
