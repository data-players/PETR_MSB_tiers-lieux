import React from 'react';
import { SimpleForm } from "ra-ui-materialui";
import { Edit } from "@semapps/archipelago-layout";
import OrganizationForm from './OrganizationForm';
import Title from '../_Components/Title';

export const OrganizationEdit = props => (
  <Edit title={<Title />} {...props} >
    <SimpleForm>
      <OrganizationForm />
    </SimpleForm>
  </Edit>
);

export default OrganizationEdit;
