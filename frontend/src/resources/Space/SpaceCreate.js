import React from 'react';
import { Create } from "@semapps/archipelago-layout";
import {
  SimpleForm,
} from 'react-admin';
import SpaceInputs from './SpaceInputs';
import SpaceTitle from './SpaceTitle';
import { MarkdownInput } from '@semapps/markdown-components';
import { useLocation } from 'react-router';
import queryString from 'query-string';

export const SpaceCreate = props =>{
  const location = useLocation();
  const query=queryString.parse(location.search);
  return (
    <Create title={<SpaceTitle />} {...props} >
      <SimpleForm redirect={query.redirectUri}>
        <SpaceInputs/>
      </SimpleForm>
    </Create>
  )
};

export default SpaceCreate;
