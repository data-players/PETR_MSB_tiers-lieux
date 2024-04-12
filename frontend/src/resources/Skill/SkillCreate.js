import React from 'react';
import Create from "../../layout/create/Create";
import { useCreateController } from 'react-admin';
import SkillForm from './SkillForm';
import { useLocation } from 'react-router';
import { useCheckPermissions } from '@semapps/auth-provider';
import queryString from 'query-string';
import TopToolbar from '../_Components/TopToolbar';




// import React from 'react';
import { SimpleForm, TextInput } from "ra-ui-materialui";
// import Create from "../../layout/create/Create";


export const SkillCreate = props =>{
  const location = useLocation();
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useCreateController(props);
  const query=queryString.parse(location.search);
  useCheckPermissions(record?.['petr:SkillOfferedBy'],'edit');
  return (
    <Create
      actions={<TopToolbar record={record} hasBackButton={true} />}
      {...props}
    >
      {/* <SkillForm redirect={query.redirectUri}/> */}
      <SimpleForm>
      <TextInput source="pair:label" label="Nom" fullWidth />
    </SimpleForm>
    </Create>
  )
};

export default SkillCreate;
