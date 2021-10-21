import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { Grid } from '@material-ui/core';
import { useShowController } from 'react-admin';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

import { Show } from 'react-admin';
import { ShowActions } from "@semapps/archipelago-layout";


import OrganizationShowContactLayout from './OrganizationShowContactLayout';
import OrganizationShowMainLayout from './OrganizationShowMainLayout';
import OrganizationShowNavLayout from './OrganizationShowNavLayout';

const OrganizationShow = ({...props}) => {
  const { record } = useShowController(props);
  const state = useSelector(state => state);
  const isAdminContext = state.customState.isAdminContext;
  const currentUri = useLocation().pathname;
  
  return (
    <>
      { ! isAdminContext &&
        <>
          <BreadcrumbsItem to='/Map'>Cartographie</BreadcrumbsItem>
        </>
      }
      <Show actions={<ShowActions hasList={false} />} {...props} >
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <OrganizationShowNavLayout {...props} />
          </Grid>
          <Grid item xs={12} md={6}>
            <OrganizationShowMainLayout label={record ? record["pair:label"]: ""} isAdminContext={isAdminContext} {...props} />
          </Grid>
          <Grid item xs={12} md={3}>
            <OrganizationShowContactLayout {...props} />
          </Grid>
        </Grid>
      </Show>
    </>
  );
};

export default OrganizationShow;