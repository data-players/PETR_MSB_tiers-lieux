import React from 'react';
import { useSelector } from 'react-redux';

import OrganizationShowInAdmin from "./OrganizationShowInAdmin";
import OrganizationShowInWebSite from "./OrganizationShowInWebSite";

const OrganizationShow = ({...props}) => {

  const state = useSelector(state => state);
  const isAdminContext = state.customState.isAdminContext;

  return (
    isAdminContext
      ? <OrganizationShowInAdmin {...props} />
      : <OrganizationShowInWebSite {...props}/>
  );
};

export default OrganizationShow;
