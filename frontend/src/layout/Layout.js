import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
import { Notification } from 'react-admin';
import { useLocation } from 'react-router-dom';
import { Box, /* useMediaQuery, */ ThemeProvider } from '@material-ui/core';
import AppBar from './AppBar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import SideMenu from './SideMenu';
import TreeMenu from './DefaultLayout/TreeMenu/TreeMenu';

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
  
  const noAdminLinks = [
    { link: '/' },
    { link: '/About' },
    { link: '/Map' },
    { link: '/Search' },
  ];
  
  const currentPage = useLocation().pathname;
  const isAdminPage = noAdminLinks.find(e => e.link === currentPage) === undefined;
                   
  console.log('isAdminPage:', isAdminPage);
    
  // const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <SideMenu menuItems={menuItems} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <AppBar title={title} logout={logout} menuItems={menuItems} setSidebarOpen={setSidebarOpen} isConnected={isConnected} />
      {
        isConnected && isAdminPage
          ? <TreeMenu />
          : <div></div>
      }
      <Box>{children}</Box>
      <Footer title={title} />
      {/* Required for react-admin optimistic update */}
      <Notification />
    </ThemeProvider>
  );
};

export default Layout;
