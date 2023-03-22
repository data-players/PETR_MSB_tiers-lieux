import React from 'react';
import Create from "../../layout/create/Create";
import { useCreateController } from 'react-admin';
import SpaceForm from './SpaceForm';
import { useLocation } from 'react-router';
import { useCheckPermissions } from '@semapps/auth-provider';
import queryString from 'query-string';
import TopToolbar from '../_Components/TopToolbar';

export const SpaceCreate = props =>{
  const location = useLocation();
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useCreateController(props);
  const query=queryString.parse(location.search);
  useCheckPermissions(record?.['petr:spaceOfferedBy'],'edit');
  return (
    <Create
      actions={<TopToolbar record={record} hasBackButton={true} />}
      {...props}
    >
      <SpaceForm redirect={query.redirectUri}/>
    </Create>
  )
};

export default SpaceCreate;
