import React from 'react';

import { Grid } from '@material-ui/core';
import { ReferenceField, TextField, useRecordContext } from 'react-admin';

import { MainList, Show } from "@semapps/archipelago-layout";
import { MarkdownField } from '@semapps/markdown-components';

import EquipmentTitle from "./EquipmentTitle";

const EquipmentShowInAdmin = ({...props}) => {
  return (
    <Show title={<EquipmentTitle />} {...props}>
      <Grid item xs={12} sm={9}>
        <div>InAdmin</div>
        <MainList>
          <MarkdownField source="pair:label" />
          <ReferenceField source="pair:offeredBy" reference="Organization">
            <TextField source="pair:label" />
          </ReferenceField>
          <MarkdownField source="pair:description" />
          <MarkdownField source="pair:model" />
          <MarkdownField source="pair:rate" />
          <MarkdownField source="pair:availablity" />
          <MarkdownField source="pair:accessModality" />
        </MainList>
      </Grid>
    </Show>
  );
};

export default EquipmentShowInAdmin;