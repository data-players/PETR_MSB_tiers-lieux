import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import EquipementForm from './EquipmentForm'
import {
  SimpleForm,
  ReferenceInput,
  SelectInput,
  useGetManyReference,
  useEditController
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { useCheckPermissions } from '@semapps/auth-provider';

import { useLocation } from 'react-router';
import queryString from 'query-string';
import TopToolbar from '../_Components/TopToolbar';

export const EquipmentEdit = props =>{
  const location = useLocation();
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useEditController(props);
  const query=queryString.parse(location.search);
  // const permissions = useCheckPermissions(record?.['petr:equipmentOfferedBy'],'edit',`/Organization/${encodeURIComponent(record?.['petr:equipmentOfferedBy'])}/show`);
  useCheckPermissions(record?.['petr:equipmentOfferedBy'],'edit');

  return (
    <Edit
      actions={<TopToolbar record={record} hasBackButton={true} />}
      {...props}
    >
      <EquipementForm orga={record} redirect={query.redirectUri}/>
    </Edit>
  )
};

export default EquipmentEdit;
