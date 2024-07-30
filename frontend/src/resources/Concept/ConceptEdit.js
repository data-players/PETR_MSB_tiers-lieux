import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { EditWithPermissions } from '@semapps/auth-provider';
import ConceptTitle from './ConceptTitle';
import Edit from "../../layout/edit/Edit";

export const ConceptEdit = props => (
  <Edit title={<ConceptTitle />} {...props} >
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </Edit>
);

export default ConceptEdit;
