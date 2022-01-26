import React from 'react';
import {
  TextInput,
  NumberInput,
  required,
  SelectInput,
  ReferenceInput,
  SimpleForm
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';

export const EquipmentForm = ({orga,...props}) => {
  return (
    <SimpleForm {...props}>
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
        validate={[required()]}
      >
        <SelectInput optionText="pair:label" validate={[required()]} />
      </ReferenceInput>
      <MarkdownInput source="pair:description" multiline fullWidth />
      <TextInput source="petr:model" fullWidth />
      <NumberInput source="petr:amount" defaultValue={1} fullWidth validate={[required()]} />
      <ReferenceInput
        source="petr:hasRate"
        reference="Rate"
        fullWidth
        validate={[required()]}
      >
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      {/*<TextInput source="petr:availablity" fullWidth />*/}
      <ReferenceInput
        source="petr:hasAccessModality"
        reference="AccessModality"
        fullWidth
        validate={[required()]}
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
    </SimpleForm>
  )
}

export default EquipmentForm;
