import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import { SimpleForm, TextInput } from "ra-ui-materialui";
import OrganizationTitle from './OrganizationTitle';
import MarkdownInput from '../../markdown/MarkdownInput'
import  PairLocationInput from '../../components/PairLocationInput';

export const OrganizationEdit = props => (
  <Edit title={<OrganizationTitle />} {...props} >
    <SimpleForm redirect="show" >
      <TextInput source="pair:label" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <TextInput source="pair:e-mail" label="Email" type="email" fullWidth/>
      <TextInput source="pair:phone" label="Téléphone" fullWidth />
      <PairLocationInput label="Adresse" source="pair:hasLocation" fullWidth />
    </SimpleForm>
  </Edit>
)

export default OrganizationEdit;
