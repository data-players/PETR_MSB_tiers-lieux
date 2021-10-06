import React from 'react';
import { SimpleForm } from "ra-ui-materialui";
import { EditWithPermissions } from '@semapps/auth-provider';
import OrganizationForm from './OrganizationForm';
import Title from '../_Components/Title';

export const OrganizationEdit = props => (
  <EditWithPermissions title={<Title />} {...props} >
    <SimpleForm>
      <OrganizationForm />
    </SimpleForm>
  </EditWithPermissions>
);

export default OrganizationEdit;
