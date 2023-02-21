import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { ImageField, TextField, UrlField, useRecordContext } from 'react-admin';

import FullWidthBox from '../../../commons/FullWidthBox';

import useStyles from './OrganizationShowUseStyles';
import SocialNetworkArrayIcon from '../../../addons/SocialNetworkArrayIcon';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

const OrganizationShowContactLayout = ({...props}) => {
  
  const classes = useStyles();
  const record = useRecordContext();

  return (
    <FullWidthBox className={classes.innerContainer}>
      <Typography component="h3" className={classes.subtitle}>
        Informations pratiques
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
        { record["pair:e-mail"] ? <Box className={classes.contactBox}>
            <EmailIcon/>
            <TextField source="pair:e-mail" className={classes.contactItem}/>
          </Box> : null }
          { record["pair:phone"] ? <Box className={classes.contactBox}>
            <PhoneAndroidIcon />
            <TextField source="pair:phone" className={classes.contactItem}/>
          </Box> : null }
          { record["pair:webPage"] ? <Box className={classes.contactBox}>
            <LanguageIcon/>
            <UrlField record={record} source="pair:webPage" className={classes.contactItem}/>
          </Box> : null }
          <Box>
              <SocialNetworkArrayIcon record={record} source="petr:socialMedias" addLabel/>
          </Box>
        </Typography>
    </FullWidthBox>
  );
};

export default OrganizationShowContactLayout;