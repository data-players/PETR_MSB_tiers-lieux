import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import Create from "../../layout/create/Create";
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

const isIframe = window !== window.top;

const PageCreate = props => (
  <>
    {isIframe ? null : <BreadcrumbsItem to='/Page'>Page</BreadcrumbsItem> } 
    <Create {...props}>
      <SimpleForm>
        <TextInput source="pair:label" label="Nom" fullWidth />
      </SimpleForm>
    </Create>
  </>
);

export default PageCreate;
