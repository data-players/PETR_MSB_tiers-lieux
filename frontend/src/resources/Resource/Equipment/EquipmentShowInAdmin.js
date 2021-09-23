import React from 'react';
import { useSelector } from 'react-redux';

import { Grid, makeStyles } from '@material-ui/core';
import { ReferenceField, TextField, useRecordContext, useShowContext } from 'react-admin';

import { MainList, Show } from "@semapps/archipelago-layout";
import { MarkdownField } from '@semapps/markdown-components';

import EquipmentTitle from "./EquipmentTitle";

const EquipmentShowInAdmin = ({...props}) => {
  
  const { basePath, hasEdit, record } = useShowContext();
  
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