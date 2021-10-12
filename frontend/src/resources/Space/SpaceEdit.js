import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import SpaceTitle from './SpaceTitle';
import SpaceInputs from './SpaceInputs';
import {
  SimpleForm,
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { useLocation } from 'react-router';
import queryString from 'query-string';

export const SpaceEdit = props =>{
  const location = useLocation();
  const query=queryString.parse(location.search);

  return (
    <Edit title={<SpaceTitle />} {...props} >
      <SimpleForm redirect={query.redirectUri}>
        <SpaceInputs/>
      </SimpleForm>
    </Edit>
  )
};

export default SpaceEdit;
