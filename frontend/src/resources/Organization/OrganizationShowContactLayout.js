import React from 'react';
import { useSelector } from 'react-redux';

import { Typography, makeStyles } from '@material-ui/core';
import { ImageField, UrlField, useRecordContext } from 'react-admin';

import FullWidthBox from '../../commons/FullWidthBox';

import useStyles from './OrganizationShowUseStyles';


const OrganizationShowContactLayout = ({...props}) => {
  
  const classes = useStyles();
  
  const record = useRecordContext();
  const state = useSelector(state => state);
  let customRecord = record;
  if (state.customState.organization) {
    customRecord = state.customState.organization;
  }
  
  return (
    <FullWidthBox className={classes.innerContainer}>
      <Typography component="h3" className={classes.subtitle}>
        <span>Informations pratiques</span>
      </Typography>
      <FullWidthBox className={classes.identityContainer}>
        <ImageField record={customRecord} source="petr:logo" />
        <FullWidthBox className={classes.addressContainer}>
          <Typography component="p" variant="body3">
            Todo : Adresse
          </Typography>
        </FullWidthBox>
      </FullWidthBox>
      <Typography component="h3" className={classes.subtitle}>
        <span>Contact</span>
      </Typography>
      <FullWidthBox className={classes.contactContainer}>
        <UrlField record={customRecord} source="pair:webPage" />
        </FullWidthBox>
    </FullWidthBox>
  );
};

export default OrganizationShowContactLayout;