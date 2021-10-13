import React from 'react';
import { Create } from "@semapps/archipelago-layout";
import {
  SimpleForm,
  useCreateController
} from 'react-admin';
import EquipmentInputs from './EquipmentInputs';
import EquipmentTitle from './EquipmentTitle';
import { MarkdownInput } from '@semapps/markdown-components';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { useCheckPermissions } from '@semapps/auth-provider';

export const EquipmentCreate = props =>{
  const location = useLocation();
  const query=queryString.parse(location.search);
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useCreateController(props);
  useCheckPermissions(record?.['petr:equipmentOfferedBy'],'edit');

  return (
    <Create title={<EquipmentTitle />} {...props} >
      <SimpleForm redirect={query.redirectUri}>
        <EquipmentInputs orga={record}/>
      </SimpleForm>
    </Create>
  )
};

export default EquipmentCreate;
