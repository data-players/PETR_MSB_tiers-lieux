import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';
import { ImageField, ReferenceField, TextField, UrlField, useShowContext, useRecordContext } from 'react-admin';

import { MainList, Show } from "@semapps/archipelago-layout";
import { MapField } from '@semapps/geo-components';
import { MarkdownField } from '@semapps/markdown-components';

import MultipleImagesField from '../../components/MultipleImagesField'
import UrlArrayField from '../../components/UrlArrayField'
import OrganizationTitle from "./OrganizationTitle";

const OrganizationShowInAdmin = ({...props}) => {
  return (
    <Show title={<OrganizationTitle />} {...props}>
      <Grid item xs={12} sm={9}>
        <div>InAdmin</div>
        <MainList>
          <MarkdownField source="pair:label" />
          <MarkdownField source="pair:description" />
          <ReferenceField source="pair:hasType" reference="OrganizationType">
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
          <ImageField source="petr:logo" />
          <MultipleImagesField source="pair:depictedBy" max={10} />
          <UrlField source="pair:webPage" />
          <UrlArrayField source="petr:socialMedias" />
        </MainList>
      </Grid>
    </Show>
  );
};

export default OrganizationShowInAdmin;