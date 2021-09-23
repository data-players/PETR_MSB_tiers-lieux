import jwtDecode from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Notification } from 'react-admin';

import { Box, Grid, ThemeProvider } from '@material-ui/core';

import AppBar from './AppBar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import SideMenu from './SideMenu';
import TreeMenu from './DefaultLayout/TreeMenu/TreeMenu';

import { 
  ENTER_ADMIN,
  LEAVE_ADMIN
} from '../customActions';

const Layout = ({ logout, theme, children, title, menu }) => {
  
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
  const resources = Object.keys(state.admin.resources);
  const isAdminOpen = state.customState.isAdminOpen;
  const dispatch = useDispatch();
  const currentPathname = useLocation().pathname;
  
  let isAdminPage = false;
  resources.forEach( resource => {
    if (currentPathname.startsWith('/' + resource)) {
      isAdminPage = true
    }
  });
  
  let isShowPage = currentPathname.endsWith('/show');
  
  useEffect(() => {
    if ( resources.length !== 0) {
      if ( isAdminOpen && ! isAdminPage ) {
        console.log('===' + LEAVE_ADMIN);
        dispatch({ type: LEAVE_ADMIN })      
      }
      if ( ! isAdminOpen && isAdminPage && ! isShowPage ) {
        console.log('===' + ENTER_ADMIN);
        dispatch({ type: ENTER_ADMIN })      
      }
    }
  }, [state]);
  
  console.log('customState', state.customState);

  // const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <ThemeProvider theme={theme}>
    
      {/* <ScrollToTop /> */}
      {/* <SideMenu menuItems={menuItems} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
      
      <AppBar title={title} logout={logout} menuItems={menuItems} setSidebarOpen={setSidebarOpen} isConnected={isConnected} />
      {
        isConnected && state.customState.isAdminOpen
          ? 
            <Grid container>
              <Grid item xs={3}>
                <TreeMenu />
              </Grid>
              <Grid item xs={9}>
                <Box>{children}</Box>
              </Grid>
            </Grid>
          : 
            <Grid container>
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
