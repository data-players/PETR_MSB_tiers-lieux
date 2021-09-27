import React from 'react';

import { SimpleForm, TextInput } from "ra-ui-materialui";
import { ArrayInput, ImageInput, SelectInput, SimpleFormIterator, required } from 'react-admin';

import { MapField } from '@semapps/geo-components';
import { ImageField, ReferenceInput } from '@semapps/semantic-data-provider';

import PairLocationInput from '../../components/PairLocationInput';
import MarkdownInput from '../../markdown/MarkdownInput'
import OrganizationTitle from './OrganizationTitle';

export const OrganizationForm = props => (
  <>
    <TextInput source="pair:label" fullWidth validate={[required()]} />
    <ReferenceInput 
      source="pair:hasType" 
      reference="OrganizationType" 
      validate={[required()]}
    >
      <SelectInput optionText="pair:label" />
    </ReferenceInput>
    <MarkdownInput source="pair:description" multiline fullWidth />
    <PairLocationInput source="pair:hasLocation" fullWidth />
    <ImageInput source="petr:logo" accept="image/*">
      <ImageField source="src" />
    </ImageInput>
    <ImageInput source="pair:depictedBy" accept="image/*" multiple>
      <ImageField source="src" />
    </ImageInput>
    <TextInput source="pair:e-mail" type="email" fullWidth/>
    <TextInput source="pair:phone" fullWidth />
    <TextInput source="pair:webPage" fullWidth />
    <ArrayInput source="petr:socialMedias">
      <SimpleFormIterator>
        <TextInput />
      </SimpleFormIterator>
    </ArrayInput>
  </>
)

export default OrganizationForm;
