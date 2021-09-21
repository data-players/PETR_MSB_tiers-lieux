import React from 'react';
import { TextField } from 'react-admin';
import { Grid } from '@material-ui/core';
import { Show, SeparatedListField } from "@semapps/archipelago-layout";
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import OrganizationTitle from "./OrganizationTitle";
import MarkdownField from "../../markdown/MarkdownField";

const OrganizationShow = props => (
  <Show title={<OrganizationTitle />} {...props}>
    <Grid container>
      <MarkdownField source="pair:description"/>
      <ReferenceArrayField reference="Type" source="pair:hasType">
        <SeparatedListField linkType={false}>
          <TextField source="pair:label" />
        </SeparatedListField>
      </ReferenceArrayField>
    </Grid>
  </Show>
);

export default OrganizationShow;