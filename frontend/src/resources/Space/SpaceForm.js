import React from 'react';
import {
  TextInput,
  NumberInput,
  SelectInput,
  required,
  ReferenceInput,
  SelectArrayInput,
  SimpleForm
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ReferenceArrayInput } from '@semapps/semantic-data-provider';


export const SpaceInputs = props => (
    <SimpleForm {...props}>
      <ReferenceInput
        source="petr:spaceOfferedBy"
        reference="Organization"
        disabled
        fullWidth
      >
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <TextInput source="pair:label" fullWidth validate={[required()]} />
      <MarkdownInput source="pair:description" multiline fullWidth />
      <ReferenceInput
        source="petr:hasRate"
        reference="Rate"
        validate={[required()]}
      >
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <NumberInput source="petr:capacity" defaultValue={1} fullWidth validate={[required()]} />
      <ReferenceInput
        source="petr:hasSpaceType"
        reference="SpaceType"
        validate={[required()]}
        fullWidth
      >
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <ReferenceArrayInput source="pair:locationOf" reference="Equipment" fullWidth disabled>
        <SelectArrayInput optionText="pair:label" />
      </ReferenceArrayInput>
    </SimpleForm>
)

export default SpaceInputs;
