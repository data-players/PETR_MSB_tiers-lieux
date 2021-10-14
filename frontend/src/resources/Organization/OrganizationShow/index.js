import React from 'react';

import { Grid } from '@material-ui/core';

import { Show } from "@semapps/archipelago-layout";

import OrganizationShowContactLayout from './OrganizationShowContactLayout';
import OrganizationShowMainLayout from './OrganizationShowMainLayout';
import OrganizationShowNavLayout from './OrganizationShowNavLayout';

const OrganizationShow = ({...props}) => {
  return (
    <Show {...props}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <OrganizationShowNavLayout {...props} />
        </Grid>
        <Grid item xs={12} md={6}>
          <OrganizationShowMainLayout {...props} />
        </Grid>
        <Grid item xs={12} md={3}>
          <OrganizationShowContactLayout {...props} />
        </Grid>
      </Grid>
    </Show>
  );
};

export default OrganizationShow;