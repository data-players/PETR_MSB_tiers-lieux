import React from 'react';
import { SimpleForm } from "ra-ui-materialui";
import { Edit } from "@semapps/archipelago-layout";
import EquipmentForm from './EquipmentForm';
import EquipmentTitle from './EquipmentTitle';

export const EquipmentEdit = props => (
  <Edit title={<EquipmentTitle />} {...props} >
    <SimpleForm>
      <EquipmentForm />
    </SimpleForm>
  </Edit>
);

export default EquipmentEdit;
