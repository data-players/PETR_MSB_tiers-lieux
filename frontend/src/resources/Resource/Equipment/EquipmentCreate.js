import React from 'react';
import { SimpleForm } from "ra-ui-materialui";
import { Create } from "@semapps/archipelago-layout";
import EquipmentForm from './EquipmentForm';

const EquipmentCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <EquipmentForm />
    </SimpleForm>
  </Create>
);

export default EquipmentCreate;