import React from 'react';

import { SimpleForm, TextInput } from "ra-ui-materialui";
import { ArrayInput, ImageInput, SelectInput, SimpleFormIterator, required } from 'react-admin';

import { MapField } from '@semapps/geo-components';
import { ImageField, ReferenceInput, ReificationArrayInput } from '@semapps/semantic-data-provider';

import PairLocationInput from '../../pair/PairLocationInput';
import MarkdownInput from '../../markdown/MarkdownInput';

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
    <ImageInput source="petr:images" accept="image/*" multiple>
      <ImageField source="src" />
    </ImageInput>
    <ArrayInput source="petr:videos">
      <SimpleFormIterator>
        <TextInput label="Video url"/>
      </SimpleFormIterator>
    </ArrayInput>
    <ReferenceInput
      source="petr:hasLegalStatus"
      reference="LegalStatus"
      validate={[required()]}
    >
      <SelectInput optionText="pair:label" />
    </ReferenceInput>
    <TextInput source="pair:e-mail" type="email" fullWidth/>
    <TextInput source="pair:phone" fullWidth />
    <TextInput source="pair:webPage" fullWidth />
    <ArrayInput source="petr:socialMedias">
      <SimpleFormIterator>
        <TextInput />
      </SimpleFormIterator>
    </ArrayInput>
    <ArrayInput source="petr:hasLabel">
      <SimpleFormIterator>
        <ReferenceInput reference="Label">
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      </SimpleFormIterator>
    </ArrayInput>
    <ArrayInput source="petr:hasNetwork">
      <SimpleFormIterator>
        <ReferenceInput reference="Network">
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      </SimpleFormIterator>
    </ArrayInput>
    <ReferenceInput
      source="petr:hasAudience"
      reference="Audience"
    >
      <SelectInput optionText="pair:label" />
    </ReferenceInput>
    <ReificationArrayInput source="petr:equipmentOffers" reificationClass="pair:Resource">
      <TextInput source="pair:Label" fullWidth />
    </ReificationArrayInput>
  </>
)

export default OrganizationForm;
