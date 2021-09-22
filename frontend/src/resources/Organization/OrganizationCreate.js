import React from 'react';

import { SimpleForm, TextInput } from "ra-ui-materialui";
import { ImageInput, SelectInput } from 'react-admin';

import { ImageField, ReferenceInput } from '@semapps/semantic-data-provider';
import { Create } from '@semapps/archipelago-layout';

import PairLocationInput from '../../components/PairLocationInput';
import MarkdownInput from '../../markdown/MarkdownInput'

const OrganizationCreate = props => (
  <Create {...props}>
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
  </Create>
);

export default OrganizationCreate;