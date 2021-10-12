import React from 'react';
import {
  TextInput,
  NumberInput,
  SelectInput,
  required,
  ReferenceInput
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';

export const SpaceInputs = props => (
    <>
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
      >
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
    </>
)

export default SpaceInputs;
