import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';
import { ArrayField, ImageField, ReferenceField, TextField, UrlField, useShowContext, useRecordContext } from 'react-admin';

import { MainList, SeparatedListField, Show } from "@semapps/archipelago-layout";
import { MapField } from '@semapps/geo-components';
import { MarkdownField } from '@semapps/markdown-components';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';

import MultipleImagesField from '../../components/MultipleImagesField'
import UrlArrayField from '../../components/UrlArrayField'
import VideoArrayField from '../../components/VideoArrayField';
import Title from "../_Components/Title";
import { ShowWithPermissions } from '@semapps/auth-provider';

const OrganizationShowInAdmin = ({...props}) => {
  return (
    <ShowWithPermissions title={<Title />} {...props}>
      <Grid item xs={12} sm={9}>
        <div>InAdmin</div>
        <MainList>
          <MarkdownField source="pair:label" />
          <ReferenceField source="pair:hasType" reference="OrganizationType">
            <TextField source="pair:label" />
          </ReferenceField>
          <MarkdownField source="pair:description" />
          <ImageField source="petr:logo" />
          <MultipleImagesField source="pair:depictedBy" max={10} />
          <VideoArrayField source="petr:videos" />
          <UrlArrayField source="petr:socialMedias" />
          <UrlField source="pair:webPage" />
          <MapField
            source="pair:hasLocation"
            address={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:label']}
            latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
            longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
          />
          <ReferenceField source="petr:hasSector" reference="Sector" link={false}>
            <TextField source="pair:label" />
          </ReferenceField>
          <ReferenceField source="petr:hasLegalStatus" reference="LegalStatus">
            <TextField source="pair:label" />
          </ReferenceField>
          <MarkdownField source="pair:e-mail" />
          <MarkdownField source="pair:phone" />
          <ReferenceArrayField reference="Label" source="petr:hasLabels">
            <SeparatedListField linkType={false}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Network" source="petr:hasNetworks">
            <SeparatedListField linkType={false}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
          <ReferenceField source="petr:hasAudience" reference="Audience">
            <TextField source="pair:label" />
          </ReferenceField>
        </MainList>
      </Grid>
    </ShowWithPermissions>
  );
};

export default OrganizationShowInAdmin;
