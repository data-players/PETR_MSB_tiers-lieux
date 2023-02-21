import React from 'react';
import { useLocation } from 'react-router';

import { Typography } from '@material-ui/core';
import { Link, useRecordContext } from 'react-admin';

import { MapField } from '@semapps/geo-components';

import FullWidthBox from '../../../commons/FullWidthBox';

import useStyles from './OrganizationShowUseStyles';

const OrganizationShowNavLayout = ({...props}) => {
  
  const classes = useStyles();
  
  const currentUri = useLocation().pathname;
  const showIndex = currentUri.search('/show');
  const showUri = currentUri.substring(0, showIndex) + '/show';
  const showEquipmentUri = showUri + '/1';
  const showSpaceUri = showUri + '/2';
  const showServiceUri = showUri + '/3';
  
  const record = useRecordContext();
  
  return (
    <FullWidthBox className={classes.innerContainer}>
      <Typography component="div" className={classes.subtitle} >
        Map
      </Typography>
      <MapField
        source="pair:hasLocation"
        address={null}
        latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
        longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
        addLabel={false}
        className={classes.map}
        record={record}
      />
    </FullWidthBox>
  );
};

export default OrganizationShowNavLayout;