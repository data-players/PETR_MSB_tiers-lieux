import React from 'react';
import { SimpleForm, TextInput, DateInput } from 'react-admin';
import Create from "../../layout/create/Create";
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

const isIframe = window !== window.top;

const AdCreate = (props) => (
  <>
      {isIframe ? null : <BreadcrumbsItem to='/Ads'>Annonce</BreadcrumbsItem> } 
      <Create {...props}>
        <SimpleForm>
          <TextInput source="pair:label" label="Nom" fullWidth />
          <DateInput source="petr:date" defaultValue={new Date().toISOString().slice(0, 10)}/>
        </SimpleForm>
      </Create>
    </>
);

export default AdCreate;
