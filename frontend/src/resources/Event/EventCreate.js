import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';


const isIframe = window !== window.top;

const EventCreate = props => (
  <>
    {isIframe ? null : <BreadcrumbsItem to='/Event'>Agenda</BreadcrumbsItem> } 
    <Create {...props}>
      <SimpleForm>
        <TextInput source="pair:label" label="Nom" fullWidth />
      </SimpleForm>
    </Create>
  </>
);

export default EventCreate;
