import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import ServiceTitle from './ServiceTitle';
import ServiceInputs from './ServiceInputs';
import {
  SimpleForm,
  useEditController
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { useLocation } from 'react-router';
import { useCheckPermissions } from '@semapps/auth-provider';
import queryString from 'query-string';

export const ServiceEdit = props =>{
  const location = useLocation();
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useEditController(props);
  const query=queryString.parse(location.search);
  useCheckPermissions(record?.['petr:serviceOfferedBy'],'edit');

  return (
    <Edit title={<ServiceTitle />} {...props} >
      <SimpleForm redirect={query.redirectUri}>
        <ServiceInputs/>
      </SimpleForm>
    </Edit>
  )
};

export default ServiceEdit;
