import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import EquipmentTitle from './EquipmentTitle';
import EquipmentInputs from './EquipmentInputs';
import {
  SimpleForm,
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { useLocation } from 'react-router';
import queryString from 'query-string';

export const EquipmentEdit = props =>{
  const location = useLocation();
  const query=queryString.parse(location.search);

  return (
    <Edit title={<EquipmentTitle />} {...props} >
      <SimpleForm redirect={query.redirectUri}>
        <EquipmentInputs/>
      </SimpleForm>
    </Edit>
  )
};

export default EquipmentEdit;
