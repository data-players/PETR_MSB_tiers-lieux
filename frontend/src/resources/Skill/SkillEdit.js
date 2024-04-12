import React from 'react';
import Edit from "../../layout/edit/Edit";
import SkillForm from './SkillForm';
import { useEditController } from 'react-admin';
import { useLocation } from 'react-router';
import { useCheckPermissions } from '@semapps/auth-provider';
import queryString from 'query-string';
import TopToolbar from '../_Components/TopToolbar';
import {PersonsInput} from '../../inputs'
// import { SimpleForm, TextInput } from "ra-ui-materialui";
import {  SimpleForm, TextInput } from 'react-admin';

export const SkillEdit = props =>{
  const location = useLocation();
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useEditController(props);
  const query=queryString.parse(location.search);
  useCheckPermissions(record?.['petr:SkillOfferedBy'],'edit');

  return (
    <Edit
      actions={<TopToolbar record={record} hasBackButton={true} />}
        {...props}
      >
        <TextInput source="pair:label" fullWidth />
        <PersonsInput source="pair:offeredBy" />
        {/* <SkillForm redirect={query.redirectUri}/> */}
    </Edit>
  )
};

export default SkillEdit;
