import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
import { Box, Container, Grid, makeStyles, ThemeProvider } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Notification } from 'react-admin';
import {
  Breadcrumbs,
  BreadcrumbsItem
} from 'react-breadcrumbs-dynamic';

import AppBar from './AppBar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import SideMenu from './SideMenu';
import TreeMenu from './DefaultLayout/TreeMenu/TreeMenu';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    maxWidth: 1400,
    margin: 'auto'
  },
  adminContainer: {
    maxWidth: 1400,
  },
}));

const Layout = ({ logout, theme, children, title, menu }) => {
  
  const classes = useStyles();

  const token = localStorage.getItem('token');
  const payload = token && jwtDecode(token);
  const isConnected = payload && payload.webId !== '';

  const menuItems = [
    { link: '/About', name: 'Qui sommes-nous ?', admin: false },
    { link: '/Map', name: 'Carte des tiers lieux', admin: false },
    { link: '/Search', name: 'Rechercher un service', admin: false },
    { link: '/Organization', name: 'Admin', admin: true },
  ];

  const state = useSelector(state => state);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>

      <ScrollToTop />
      <SideMenu menuItems={menuItems} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <AppBar title={title} logout={logout} menuItems={menuItems} setSidebarOpen={setSidebarOpen} isConnected={isConnected} />
      
      <Container maxWidth="lg">
        {
          window.location.pathname!='/' &&
            <Box id="breadcrumpContainer" style={{padding:'10px'}}>
              <Breadcrumbs separator=" / " finalItem="span" finalProps={{
                style: {color: 'gray'}
              }}/>
            </Box>
        }
        <BreadcrumbsItem to='/'>Accueil</BreadcrumbsItem>
      </Container>
      {
        isConnected && state.customState.isAdminContext
          ?
            <Grid container>
              <BreadcrumbsItem to='/Organization'>Admin</BreadcrumbsItem>
              <Grid item xs={0} sm={3} lg={2}>
                <TreeMenu />
              </Grid>
              <Grid item xs={12} sm={9} lg={10} className={classes.adminContainer}>
                <Box>{children}</Box>
              </Grid>
            </Grid>
          :
            <Grid container className={classes.container}>
              <Grid item xs={12}>
                <Box>{children}</Box>
              </Grid>
            </Grid>
      }
      <Footer title={title} />
      {/* Required for react-admin optimistic update */}
      <Notification />
    </ThemeProvider>
  );
};

export default Layout;
