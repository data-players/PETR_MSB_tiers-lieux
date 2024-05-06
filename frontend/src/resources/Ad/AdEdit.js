import React from 'react';
import { SimpleForm, TextInput, SelectInput, AutocompleteArrayInput, DateInput, ReferenceInput,required } from 'react-admin';
import Edit from "../../layout/edit/Edit";
import { MarkdownInput } from '@semapps/markdown-components';
import AdTitle from './AdTitle';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { ReferenceArrayInput } from "@semapps/input-components";


const isIframe = window !== window.top;

const AdEdit = props => (
  <>
    {isIframe ? null : <BreadcrumbsItem to='/Ads'>Annonce</BreadcrumbsItem>}
    <Edit title={<AdTitle />} {...props}>
      <SimpleForm redirect="show">
        <TextInput source="pair:label" fullWidth />
        <DateInput source="petr:date" />
        <MarkdownInput multiline source="pair:description" fullWidth />
        <ReferenceArrayInput source="pair:involvedIn" reference="Organization" >
          <SelectInput optionText="pair:label" />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="pair:hasTopic" reference="Topic" >
          <AutocompleteArrayInput optionText="pair:label" fullWidth />
        </ReferenceArrayInput>
        <ReferenceInput
          source="petr:hasAdStatus"
          reference="AdStatus"
          validate={[required()]}
        >
          <SelectInput optionText="pair:label" />
        </ReferenceInput>


      </SimpleForm>
    </Edit>
  </>
);

export default AdEdit;
