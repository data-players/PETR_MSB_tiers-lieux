import React from 'react';
import { Box, Drawer } from '@material-ui/core';
import { MenuItemLink } from 'react-admin';
import TreeMenu from './DefaultLayout/TreeMenu/TreeMenu';

const SideMenu = ({ menuItems, sidebarOpen, setSidebarOpen }) => {
  return (
    <Drawer variant="temporary" open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
      {menuItems.map((menuItem) => (
        <MenuItemLink key={menuItem.link} to={menuItem.link} primaryText={menuItem.name} />
      ))}
      <Box mt={-2}>
        <TreeMenu />
      </Box>
    </Drawer>
  );
}

export default SideMenu;
