import React from 'react';
import {
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceInput,
  required,
  useGetManyReference,
  useEditController
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';

export const EquipmentInputs = ({orga,...props}) => {
  return (
    <>
      <ReferenceInput
        source="petr:equipmentOfferedBy"
        reference="Organization"
        disabled
        fullWidth
      >
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <TextInput source="pair:label" fullWidth validate={[required()]} />
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
      <ReferenceInput
        source="pair:hasLocation"
        reference="Space"
        filter={{'petr:spaceOfferedBy': orga?.['petr:equipmentOfferedBy'] }}
        fullWidth
      >
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
    </>
  )
}

export default EquipmentInputs;
