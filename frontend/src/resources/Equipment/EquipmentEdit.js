import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import EquipmentTitle from './EquipmentTitle';
import EquipmentInputs from './EquipmentInputs';
import {
  SimpleForm,
  ReferenceInput,
  SelectInput,
  useGetManyReference,
  useEditController
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { useLocation } from 'react-router';
import queryString from 'query-string';

export const EquipmentEdit = props =>{
  const location = useLocation();
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useEditController(props);
  const query=queryString.parse(location.search);
  return (
    <Edit title={<EquipmentTitle />} {...props} >
      <SimpleForm redirect={query.redirectUri}>
        <EquipmentInputs orga={record}/>
      </SimpleForm>
    </Edit>
  )
};

export default EquipmentEdit;
