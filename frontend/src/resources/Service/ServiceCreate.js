import React from 'react';
import { Create } from "@semapps/archipelago-layout";
import {
  SimpleForm,
  useCreateController
} from 'react-admin';
import ServiceInputs from './ServiceInputs';
import ServiceTitle from './ServiceTitle';
import { MarkdownInput } from '@semapps/markdown-components';
import { useLocation } from 'react-router';
import { useCheckPermissions } from '@semapps/auth-provider';
import queryString from 'query-string';

export const ServiceCreate = props =>{
  const location = useLocation();
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useCreateController(props);
  const query=queryString.parse(location.search);
  useCheckPermissions(record?.['petr:serviceOfferedBy'],'edit');
  return (
    <Create title={<ServiceTitle />} {...props} >
      <SimpleForm redirect={query.redirectUri}>
        <ServiceInputs/>
      </SimpleForm>
    </Create>
  )
};

export default ServiceCreate;
