import React from 'react';
import {  SimpleForm, TextInput, SelectInput, AutocompleteArrayInput, DateInput } from 'react-admin';
import Edit from "../../layout/edit/Edit";
import { MarkdownInput } from '@semapps/markdown-components';
import AdTitle from './AdTitle';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { ReferenceArrayInput } from "@semapps/input-components";


const isIframe = window !== window.top;

const AdEdit = props => (
  <>
    {isIframe ? null : <BreadcrumbsItem to='/Ads'>Annonce</BreadcrumbsItem> } 
    <Edit title={<AdTitle />} {...props}>
      <SimpleForm redirect="show">
        <TextInput source="pair:label" fullWidth />
        <DateInput source="petr:date" />
        <MarkdownInput multiline source="pair:description" fullWidth />
        <ReferenceArrayInput source="pair:involvedIn" reference="Organization" >
          <SelectInput optionText="pair:label" />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="pair:hasTopic" reference="Topic" >
          <AutocompleteArrayInput optionText="pair:label" fullWidth/>
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  </>
);

export default AdEdit;
