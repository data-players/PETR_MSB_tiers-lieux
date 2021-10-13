import React from 'react';
import { Create } from "@semapps/archipelago-layout";
import {
  SimpleForm,
  useCreateController
} from 'react-admin';
import SpaceInputs from './SpaceInputs';
import SpaceTitle from './SpaceTitle';
import { MarkdownInput } from '@semapps/markdown-components';
import { useLocation } from 'react-router';
import { useCheckPermissions } from '@semapps/auth-provider';
import queryString from 'query-string';

export const SpaceCreate = props =>{
  const location = useLocation();
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useCreateController(props);
  const query=queryString.parse(location.search);
  useCheckPermissions(record?.['petr:spaceOfferedBy'],'edit');
  return (
    <Create title={<SpaceTitle />} {...props} >
      <SimpleForm redirect={query.redirectUri}>
        <SpaceInputs/>
      </SimpleForm>
    </Create>
  )
};

export default SpaceCreate;
