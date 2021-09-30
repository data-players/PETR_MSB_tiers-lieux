import React from 'react';

import { Grid } from '@material-ui/core';
import PanToolIcon from '@material-ui/icons/PanTool';

import { List } from 'react-admin';

import { SimpleList } from '@semapps/archipelago-layout';

import OrganizationShowContactLayout from '../../Organization/OrganizationShowContactLayout';
import OrganizationShowDetailLayout from '../../Organization/OrganizationShowDetailLayout';
import OrganizationShowLoader from '../../Organization/OrganizationShowLoader';

const EquipmentListInWebSite = props => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <OrganizationShowLoader />
        <OrganizationShowDetailLayout />
      </Grid>
      <Grid item xs={12} md={6}>
        <div>Liste</div>
        <List actions={null} {...props}>
          <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <PanToolIcon />} linkType="show" />
        </List>
      </Grid>
      <Grid item xs={12} md={3}>
        <OrganizationShowContactLayout />
      </Grid>
    </Grid>
  );
};

export default EquipmentListInWebSite;