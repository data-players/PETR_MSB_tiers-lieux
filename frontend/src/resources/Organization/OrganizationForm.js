import React from 'react';

import { SimpleForm, TextInput } from "ra-ui-materialui";
import { ImageInput, SelectInput } from 'react-admin';

import { ImageField, ReferenceInput } from '@semapps/semantic-data-provider';
import { MapField } from '@semapps/geo-components';

import PairLocationInput from '../../components/PairLocationInput';
import MarkdownInput from '../../markdown/MarkdownInput'
import OrganizationTitle from './OrganizationTitle';

export const OrganizationForm = props => (
  <>
    <TextInput source="pair:label" fullWidth />
    <ReferenceInput source="pair:hasType" reference="Type" filter={{ a: 'pair:OrganizationType' }}>
      <SelectInput optionText="pair:label" />
    </ReferenceInput>
    <MarkdownInput source="pair:description" multiline fullWidth />
    <PairLocationInput label="Adresse" source="pair:hasLocation" fullWidth />
    <ImageInput source="pair:logo" accept="image/*">
      <ImageField source="src" />
    </ImageInput>
    <ImageInput source="pair:depictedBy" accept="image/*" multiple>
      <ImageField source="src" />
    </ImageInput>
    <TextInput source="pair:e-mail" label="Email" type="email" fullWidth/>
    <TextInput source="pair:phone" label="Téléphone" fullWidth />
  </>
)

export default OrganizationForm;
