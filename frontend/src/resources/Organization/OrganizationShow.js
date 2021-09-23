import React from 'react';
import { useSelector } from 'react-redux';

import OrganizationShowInAdmin from "./OrganizationShowInAdmin";
import OrganizationShowInWebSite from "./OrganizationShowInWebSite";

const OrganizationShow = ({...props}) => {
  
  const state = useSelector(state => state);
  const isAdminOpen = state.customState.isAdminOpen;
  
  return (
    isAdminOpen 
      ? <OrganizationShowInAdmin {...props} />
      : <OrganizationShowInWebSite {...props}/>
  );
};

export default OrganizationShow;