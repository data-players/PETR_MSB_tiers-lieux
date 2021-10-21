import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { Box, Container, Grid, makeStyles, ThemeProvider } from '@material-ui/core';
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

const getAdminContext = ( (location, noAdminMenuItems) => {
  
  if (location.pathname === '/') return false;
  
  if (location.pathname.match('^.*/show/?[1-9]?$')) return false;
  
  return noAdminMenuItems.find(menuItem => 
    menuItem.link === location.pathname
  ) === undefined
});

const Layout = ({ logout, theme, children, title, menu }) => {
  
  const classes = useStyles();

  const location = useLocation();
  const menuItems = [
    { link: '/About', name: 'Qui sommes-nous ?', admin: false },
    { link: '/Map', name: 'Carte des tiers lieux', admin: false },
    { link: '/Search', name: 'Rechercher un service', admin: false },
    { link: '/Organization', name: 'Admin', admin: true },
  ];
  
  const noAdminMenuItems = menuItems.filter(menuItem => ! menuItem.admin)
  const isAdminContext = getAdminContext(location, noAdminMenuItems);
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>

      <ScrollToTop />
      <SideMenu menuItems={menuItems} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <AppBar 
        title={title} 
        logout={logout} 
        menuItems={menuItems} 
        setSidebarOpen={setSidebarOpen} 
        location={location}
        isAdminContext={isAdminContext} 
      />
      
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
        isAdminContext
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
