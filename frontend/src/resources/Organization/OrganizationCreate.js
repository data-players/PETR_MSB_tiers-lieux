import React from 'react';
import { SimpleForm } from "ra-ui-materialui";
import { Create } from "@semapps/archipelago-layout";
import OrganizationForm from './OrganizationForm';

const OrganizationCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <OrganizationForm />
    </SimpleForm>
  </Create>
);

export default OrganizationCreate;