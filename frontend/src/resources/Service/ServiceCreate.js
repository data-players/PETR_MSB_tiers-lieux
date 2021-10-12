import React from 'react';
import { Create } from "@semapps/archipelago-layout";
import {
  SimpleForm,
} from 'react-admin';
import ServiceInputs from './ServiceInputs';
import ServiceTitle from './ServiceTitle';
import { MarkdownInput } from '@semapps/markdown-components';
import { useLocation } from 'react-router';
import queryString from 'query-string';

export const ServiceCreate = props =>{
  const location = useLocation();
  const query=queryString.parse(location.search);
  return (
    <Create title={<ServiceTitle />} {...props} >
      <SimpleForm redirect={query.redirectUri}>
        <ServiceInputs/>
      </SimpleForm>
    </Create>
  )
};

export default ServiceCreate;
