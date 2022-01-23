import React from 'react';
import { Create } from "@semapps/archipelago-layout";
import { useCreateController } from 'react-admin';
import ServiceForm from './ServiceForm';
import { useLocation } from 'react-router';
import { useCheckPermissions } from '@semapps/auth-provider';
import queryString from 'query-string';
import TopToolbar from '../_Components/TopToolbar';

export const ServiceCreate = props =>{
  const location = useLocation();
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useCreateController(props);
  const query=queryString.parse(location.search);
  useCheckPermissions(record?.['petr:serviceOfferedBy'],'edit');
  return (
    <Create
      actions={<TopToolbar record={record} hasBackButton={true} />}
      {...props}
    >
      <ServiceForm redirect={query.redirectUri}/>
    </Create>
  )
};

export default ServiceCreate;
