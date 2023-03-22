import React from 'react';
import Edit from "../../layout/edit/Edit";
import ServiceForm from './ServiceForm';
import { useEditController } from 'react-admin';
import { useLocation } from 'react-router';
import { useCheckPermissions } from '@semapps/auth-provider';
import queryString from 'query-string';
import TopToolbar from '../_Components/TopToolbar';

export const ServiceEdit = props =>{
  const location = useLocation();
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useEditController(props);
  const query=queryString.parse(location.search);
  useCheckPermissions(record?.['petr:serviceOfferedBy'],'edit');

  return (
    <Edit
      actions={<TopToolbar record={record} hasBackButton={true} />}
      {...props}
    >
      <ServiceForm redirect={query.redirectUri}/>
    </Edit>
  )
};

export default ServiceEdit;
