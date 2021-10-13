import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { Typography, makeStyles } from '@material-ui/core';
import { Link, useRecordContext } from 'react-admin';

import { MapField } from '@semapps/geo-components';

import FullWidthBox from '../../commons/FullWidthBox';

import useStyles from './OrganizationShowUseStyles';

const OrganizationShowDetailLayout = ({...props}) => {
  
  console.log(1, props);
  
  const classes = useStyles();
  
  const currentUri = useLocation().pathname;
  const showIndex = currentUri.search('/show');
  const showUri = currentUri.substring(0, showIndex) + '/show';
  const showEquipmentUri = showUri + '/1';
  
  const record = useRecordContext();
  
  return (
    <FullWidthBox className={classes.innerContainer}>
      <MapField
        source="pair:hasLocation"
        address={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:label']}
        latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
        longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
        address={null}
        addLabel={false}
        className={classes.map}
        record={record}
      />
      <Typography component="div" className={classes.subtitle}>
        <Link to={showEquipmentUri} label="Equipement">
          Equipements
        </Link>
      </Typography>
    </FullWidthBox>
  );
};

export default OrganizationShowDetailLayout;