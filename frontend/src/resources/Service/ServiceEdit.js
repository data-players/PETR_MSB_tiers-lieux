import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import ServiceTitle from './ServiceTitle';
import ServiceInputs from './ServiceInputs';
import {
  SimpleForm,
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { useLocation } from 'react-router';
import queryString from 'query-string';

export const ServiceEdit = props =>{
  const location = useLocation();
  const query=queryString.parse(location.search);

  return (
    <Edit title={<ServiceTitle />} {...props} >
      <SimpleForm redirect={query.redirectUri}>
        <ServiceInputs/>
      </SimpleForm>
    </Edit>
  )
};

export default ServiceEdit;
