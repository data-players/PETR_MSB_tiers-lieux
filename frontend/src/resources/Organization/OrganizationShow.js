import React from 'react';

import { Grid } from '@material-ui/core';
import { ImageField, ReferenceField, TextField } from 'react-admin';

import { Hero, MainList, SeparatedListField, Show } from "@semapps/archipelago-layout";
import { MapField } from '@semapps/geo-components';
import { MarkdownField } from '@semapps/markdown-components';

import OrganizationTitle from "./OrganizationTitle";

/*<UrlField source="pair:homePage" />*/
const OrganizationShow = props => (
  <Show title={<OrganizationTitle />} {...props}>
    <Grid item xs={12} sm={9}>
      <MainList>
        <MarkdownField source="pair:label" />
        <MarkdownField source="pair:description" />
        <ReferenceField reference="Type" source="pair:hasType">
          <TextField source="pair:label" />
        </ReferenceField>
        <MapField
          source="pair:hasLocation"
          address={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:label']}
          latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
          longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
        />
        <MarkdownField source="pair:e-mail" />
        <MarkdownField source="pair:phone" />
        <ImageField source="image" title="logo" />
        <MarkdownField source="pair:webPage" />
      </MainList>
    </Grid>
  </Show>
);

export default OrganizationShow;