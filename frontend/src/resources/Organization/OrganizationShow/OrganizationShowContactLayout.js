import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { ArrayField, ChipField, ImageField, TextField, UrlField, useRecordContext } from 'react-admin';

import FullWidthBox from '../../../commons/FullWidthBox';

import useStyles from './OrganizationShowUseStyles';
import SocialNetworkArrayIcon from './SocialNetworkArrayIcon';

const OrganizationShowContactLayout = ({...props}) => {
  
  const classes = useStyles();
  const record = useRecordContext();

  console.log(record)
  
  return (
    <FullWidthBox className={classes.innerContainer}>
      <Typography component="h3" className={classes.subtitle}>
        <span>Informations pratiques</span>
      </Typography>
      <FullWidthBox className={classes.identityContainer}>
        <ImageField record={record} source="petr:logo" />
        <FullWidthBox className={classes.addressContainer}>
          <Typography component="p" variant="body3">
            <Box>
              <TextField record={record} source="pair:label" variant="subtitle1"/>
            </Box>
            <Box>
              <TextField record={record['pair:hasLocation']} source="pair:label" />
            </Box>
          </Typography>
        </FullWidthBox>
      </FullWidthBox>
      <Typography component="h3" className={classes.subtitle}>
        <span>Contact</span>
      </Typography>
        <Typography className={classes.contactFields}>
          <Box>
            <TextField source="pair:e-mail"/>
          </Box>
          <Box>
            <TextField source="pair:phone"/>
          </Box>
          <Box>
            <UrlField record={record} source="pair:webPage" />
          </Box>
          <Box>
              <SocialNetworkArrayIcon record={record} source="petr:socialMedias" addLabel/>
          </Box>
        </Typography>
    </FullWidthBox>
  );
};

export default OrganizationShowContactLayout;