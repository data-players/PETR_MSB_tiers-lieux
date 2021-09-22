import React from 'react';

import { SimpleForm, TextInput } from "ra-ui-materialui";
import { ImageInput, SelectInput } from 'react-admin';

import { ImageField, ReferenceInput } from '@semapps/semantic-data-provider';
import { Edit } from "@semapps/archipelago-layout";
import { MapField } from '@semapps/geo-components';

import PairLocationInput from '../../components/PairLocationInput';
import MarkdownInput from '../../markdown/MarkdownInput'
import OrganizationTitle from './OrganizationTitle';

export const OrganizationEdit = props => (
  <Edit title={<OrganizationTitle />} {...props} >
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
      <ReferenceInput reference="Type" source="pair:hasType" filter={{ a: 'pair:OrganizationType' }}>
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <MarkdownInput multiline source="pair:description" fullWidth />
      <PairLocationInput label="Adresse" source="pair:hasLocation" fullWidth />
      <ImageInput source="pair:depictedBy" accept="image/*" multiple>
        <ImageField source="src" />
      </ImageInput>
      {/*}
      <TextInput source="pair:homePage" fullWidth />
      <ImageInput source="image" label="Logo" accept="image/*">
        <ImageField source="src"/>
      </ImageInput>
      <ImageInput source="image" label="Photo" accept="image/*">
        <ImageField source="src"/>
      </ImageInput>
      */}
      <TextInput source="pair:e-mail" label="Email" type="email" fullWidth/>
      <TextInput source="pair:phone" label="Téléphone" fullWidth />
    </SimpleForm>
  </Edit>
)

export default OrganizationEdit;
