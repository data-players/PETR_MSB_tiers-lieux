import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';
import { useShowController } from 'react-admin';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

import { Show } from 'react-admin';
import { ShowActions } from "@semapps/archipelago-layout";

import OrganizationShowContactLayout from './OrganizationShowContactLayout';
import OrganizationShowMainLayout from './OrganizationShowMainLayout';
import OrganizationShowNavLayout from './OrganizationShowNavLayout';

const useStyles = makeStyles((theme) => ({
  showContainer: {
    "& #react-admin-title": {
      display: 'none',
    }
  }
}));

const OrganizationShow = ({...props}) => {
  const classes = useStyles();
  const { record } = useShowController(props);
  return (
    <>
      <BreadcrumbsItem to='/Map'>Cartographie</BreadcrumbsItem>
      <Show className={classes.showContainer} actions={<ShowActions hasList={false} />} {...props} >
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <OrganizationShowNavLayout {...props} />
          </Grid>
          <Grid item xs={12} md={6}>
            <OrganizationShowMainLayout label={record ? record["pair:label"]: ""} {...props} />
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