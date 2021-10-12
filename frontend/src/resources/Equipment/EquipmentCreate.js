import React from 'react';
import { Create } from "@semapps/archipelago-layout";
import EquipmentTitle from './EquipmentTitle';
import {
  TextInput,
  ArrayInput,
  BooleanInput,
  FormTab,
  ImageInput,
  NumberInput,
  SelectInput,
  SimpleFormIterator,
  TabbedForm,
  ListContextProvider,
  Datagrid,
  TextField,
  EditButton,
  Button,
  SimpleForm,
  SaveButton,
  SaveContextProvider,
  CreateContextProvider,
  EditContextProvider,
  FormWithRedirect,
  ReferenceInput
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { useLocation } from 'react-router';
import queryString from 'query-string';

export const EquipmentCreate = props =>{
  const location = useLocation();
  console.log('location',location);
  const query=queryString.parse(location.search);
  console.log('query',query);

  return (
    <Create title={<EquipmentTitle />} {...props} >
      <SimpleForm redirect={query.redirectUri}>
        <ReferenceInput
          source="petr:equipmentOfferedBy"
          reference="Organization"
          disabled
          fullWidth
        >
          <SelectInput optionText="pair:label" />
        </ReferenceInput>
        <ReferenceInput
          source="petr:hasEquipmentType"
          reference="EquipmentType"
          fullWidth
        >
          <SelectInput optionText="pair:label" />
        </ReferenceInput>
        <MarkdownInput source="pair:description" multiline fullWidth />
        <TextInput source="petr:model" fullWidth />
        <NumberInput source="petr:amount" defaultValue={1} fullWidth />
        <ReferenceInput
          source="petr:hasRate"
          reference="Rate"
          fullWidth
        >
          <SelectInput optionText="pair:label" />
        </ReferenceInput>
        <TextInput source="petr:availablity" fullWidth />
        <ReferenceInput
          source="petr:hasAccessModality"
          reference="AccessModality"
          fullWidth
        >
          <SelectInput optionText="pair:label" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
};

export default EquipmentCreate;
