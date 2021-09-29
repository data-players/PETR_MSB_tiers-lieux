import React from 'react';

import { Grid } from '@material-ui/core';

import { MainList, Show } from '@semapps/archipelago-layout';
import { MarkdownField } from '@semapps/markdown-components';

import OrganizationShowContactLayout from '../../Organization/OrganizationShowContactLayout';
import OrganizationShowDetailLayout from '../../Organization/OrganizationShowDetailLayout';
import OrganizationShowLoader from '../../Organization/OrganizationShowLoader';

const EquipmentShowInWebSite = props => {
  return (
    <Show actions={null} {...props}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <OrganizationShowLoader />
          <OrganizationShowDetailLayout />
        </Grid>
        <Grid item xs={12} md={6}>
          <div>Détail</div>
          <MainList>
            <MarkdownField source="pair:label" /> 
          </MainList>
        </Grid>
        <Grid item xs={12} md={3}>
          <OrganizationShowContactLayout />
        </Grid>
      </Grid>
    </Show>
  );
};

export default EquipmentShowInWebSite;