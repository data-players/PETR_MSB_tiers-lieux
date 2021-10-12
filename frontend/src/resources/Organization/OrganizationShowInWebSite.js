import React from 'react';

import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Show, TextField, useRecordContext } from 'react-admin';

import FullWidthBox from '../../commons/FullWidthBox';
import MultipleImagesField from '../../components/MultipleImagesField'

import OrganizationShowContactLayout from './OrganizationShowContactLayout';
import OrganizationShowDetailLayout from './OrganizationShowDetailLayout';
import OrganizationShowLoader from './OrganizationShowLoader';
import useStyles from './OrganizationShowUseStyles';

const OrganizationShowInWebSite = ({...props}) => {
  const classes = useStyles();
  
  return (
    <Show {...props}>
      <Grid container spacing={2}>
        <OrganizationShowLoader />
        <Grid item xs={12} md={3}>
          <OrganizationShowDetailLayout />
        </Grid>
        <Grid item xs={12} md={6}>
          <FullWidthBox className={classes.innerContainer}>
            <Typography component="h2" className={classes.title}>
              <span>InWebSite : </span>
              <TextField source="pair:label" />
            </Typography>
            <Typography component="div" className={classes.description}>
              <TextField source="pair:description" />
            </Typography>
            <MultipleImagesField source="pair:depictedBy" max={2} />
          </FullWidthBox>
        </Grid>
        <Grid item xs={12} md={3}>
          <OrganizationShowContactLayout />
        </Grid>
      </Grid>
    </Show>
  );
};

export default OrganizationShowInWebSite;