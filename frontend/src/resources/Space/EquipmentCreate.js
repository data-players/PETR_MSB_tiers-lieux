import React from 'react';
import { Create } from "@semapps/archipelago-layout";
import {
  SimpleForm,
} from 'react-admin';
import EquipmentInputs from './EquipmentInputs';
import EquipmentTitle from './EquipmentTitle';
import { MarkdownInput } from '@semapps/markdown-components';
import { useLocation } from 'react-router';
import queryString from 'query-string';

export const EquipmentCreate = props =>{
  const location = useLocation();
  const query=queryString.parse(location.search);
  return (
    <Create title={<EquipmentTitle />} {...props} >
      <SimpleForm redirect={query.redirectUri}>
        <EquipmentInputs/>
      </SimpleForm>
    </Create>
  )
};

export default EquipmentCreate;
