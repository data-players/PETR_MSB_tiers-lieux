import React from 'react';
import { SimpleForm, TextInput } from "ra-ui-materialui";
import Create from "../../layout/create/Create";

const OrganizationCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="pair:label" label="Nom" fullWidth />
    </SimpleForm>
  </Create>
);

export default OrganizationCreate;