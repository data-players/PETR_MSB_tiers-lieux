import React from 'react';

import { SimpleForm, TextInput } from "ra-ui-materialui";
import { ArrayInput, ImageInput, NumberInput, SelectInput, SimpleFormIterator, required } from 'react-admin';

import { MapField } from '@semapps/geo-components';
import { ImageField, ReferenceInput } from '@semapps/semantic-data-provider';

import PairLocationInput from '../../../components/PairLocationInput';
import MarkdownInput from '../../../markdown/MarkdownInput'
import EquipmentTitle from './EquipmentTitle';

export const EquipmentForm = props => (
  <>
    <TextInput source="pair:label" fullWidth validate={[required()]} />
    <ReferenceInput 
      source="pair:offeredBy" 
      reference="Organization" 
      validate={[required()]}
    >
      <SelectInput optionText="pair:label" />
    </ReferenceInput>
    <TextInput source="pair:description" fullWidth />
    <TextInput source="petr:model" fullWidth />
    <NumberInput source="petr:amount" defaultValue={1} fullWidth />
    <TextInput source="petr:rate" fullWidth />
    <TextInput source="petr:availablity" fullWidth />
    <TextInput source="petr:accessModality" fullWidth />
  </>
)

export default EquipmentForm;
