import React from 'react';
import { Create } from "@semapps/archipelago-layout";
import {
  SimpleForm,
  useCreateController
} from 'react-admin';
import EquipementForm from './EquipmentForm'
import { MarkdownInput } from '@semapps/markdown-components';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { useCheckPermissions } from '@semapps/auth-provider';
import TopToolbar from '../_Components/TopToolbar';

export const EquipmentCreate = props =>{
  const location = useLocation();
  const query=queryString.parse(location.search);
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useCreateController(props);
  useCheckPermissions(record?.['petr:equipmentOfferedBy'],'edit');

  return (
    <Create
      actions={<TopToolbar record={record} hasBackButton={true} />}
      {...props}
    >
      <EquipementForm orga={record} redirect={query.redirectUri}/>
    </Create>
  )
};

export default EquipmentCreate;
