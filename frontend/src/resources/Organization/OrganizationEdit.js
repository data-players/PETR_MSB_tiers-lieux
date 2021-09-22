import React from 'react';
import { SimpleForm } from "ra-ui-materialui";
import { Edit } from "@semapps/archipelago-layout";
import OrganizationForm from './OrganizationForm';
import OrganizationTitle from './OrganizationTitle';

export const OrganizationEdit = props => (
  <Edit title={<OrganizationTitle />} {...props} >
    <SimpleForm>
      <OrganizationForm />
    </SimpleForm>
  </Edit>
);

export default OrganizationEdit;
