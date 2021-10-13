import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { Typography, makeStyles } from '@material-ui/core';
import { Link, useRecordContext } from 'react-admin';

import { MapField } from '@semapps/geo-components';

import FullWidthBox from '../../commons/FullWidthBox';

import useStyles from './OrganizationShowUseStyles';

const OrganizationShowDetailLayout = ({...props}) => {
  
  const classes = useStyles();
  
  const currentUri = useLocation().pathname;
  const showIndex = currentUri.search('/show');
  const showUri = currentUri.substring(0, showIndex) + '/show';
  const showEquipmentUri = showUri + '/1';
  
  const record = useRecordContext();
  const state = useSelector(state => state);
  let customRecord = record;
  if (state.customState.organization) {
    customRecord = state.customState.organization;
  }
  
  console.log('currentUri', currentUri)
  console.log('showIndex', showIndex);
  console.log('showUri', showUri);
  
  return (
    <FullWidthBox className={classes.innerContainer}>
      <MapField
        source="pair:hasLocation"
        address={customRecord => customRecord['pair:hasLocation'] && customRecord['pair:hasLocation']['pair:label']}
        latitude={customRecord => customRecord['pair:hasLocation'] && customRecord['pair:hasLocation']['pair:latitude']}
        longitude={customRecord => customRecord['pair:hasLocation'] && customRecord['pair:hasLocation']['pair:longitude']}
        address={null}
        addLabel={false}
        className={classes.map}
        record={customRecord}
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