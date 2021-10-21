import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import SpaceInputs from './SpaceInputs';
import {
  SimpleForm,
  useEditController
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { useLocation } from 'react-router';
import { useCheckPermissions } from '@semapps/auth-provider';
import queryString from 'query-string';
import TopToolbar from '../_Components/TopToolbar';

export const SpaceEdit = props =>{
  const location = useLocation();
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useEditController(props);
  const query=queryString.parse(location.search);
  useCheckPermissions(record?.['petr:spaceOfferedBy'],'edit');
  return (
    <Edit
      actions={<TopToolbar record={record} hasBackButton={true} />} 
      {...props}
    >
      <SimpleForm redirect={query.redirectUri}>
        <SpaceInputs/>
      </SimpleForm>
    </Edit>
  )
};

export default SpaceEdit;
