import React from 'react';
import {
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceInput
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';

export const EquipmentInputs = props => (
    <>
      <ReferenceInput
        source="petr:equipmentOfferedBy"
        reference="Organization"
        disabled
        fullWidth
      >
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <ReferenceInput
        source="petr:hasEquipmentType"
        reference="EquipmentType"
        fullWidth
      >
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <MarkdownInput source="pair:description" multiline fullWidth />
      <TextInput source="petr:model" fullWidth />
      <NumberInput source="petr:amount" defaultValue={1} fullWidth />
      <ReferenceInput
        source="petr:hasRate"
        reference="Rate"
        fullWidth
      >
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <TextInput source="petr:availablity" fullWidth />
      <ReferenceInput
        source="petr:hasAccessModality"
        reference="AccessModality"
        fullWidth
      >
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
    </>
)

export default EquipmentInputs;
