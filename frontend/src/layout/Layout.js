import React, { useState } from 'react';
import { Notification } from 'react-admin';
import { Box, /* useMediaQuery, */ ThemeProvider } from '@material-ui/core';
import AppBar from './AppBar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import SideMenu from './SideMenu';
import TreeMenu from './DefaultLayout/TreeMenu/TreeMenu';

const Layout = ({ logout, theme, children, title, menu }) => {
  console.log(logout);
  const menuItems = [
    { link: '/About', name: 'Qui sommes-nous ?' },
    { link: '/Event', name: 'Evènements' },
    { link: '/Course', name: 'Parcours' },
  ];
  // const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <SideMenu menuItems={menuItems} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <AppBar title={title} logout={logout} menuItems={menuItems} setSidebarOpen={setSidebarOpen} />
      <TreeMenu />
      <Box>{children}</Box>
      <Footer title={title} />
      {/* Required for react-admin optimistic update */}
      <Notification />
    </ThemeProvider>
  );
};

export default Layout;
