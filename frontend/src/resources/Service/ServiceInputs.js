import React from 'react';
import {
  TextInput,
  NumberInput,
  SelectInput,
  required,
  ReferenceInput,
  ReferenceArrayInput,
  BooleanInput,
  SelectArrayInput
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';

export const ServiceInputs = props => (
    <>
      <ReferenceInput
        source="petr:serviceOfferedBy"
        reference="Organization"
        disabled
        fullWidth
      >
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <TextInput source="pair:label" fullWidth validate={[required()]} />
      <ReferenceInput
        source="petr:hasRate"
        reference="Rate"
        validate={[required()]}
      >
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <ReferenceArrayInput source="pair:hasLabels" reference="Label" fullWidth disabled>
        <SelectArrayInput optionText="pair:label" />
      </ReferenceArrayInput>
      <ReferenceInput
        source="petr:hasAudience"
        reference="Audience"
      >
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <BooleanInput source="petr:itinerant" defaultValue={false} />
      <MarkdownInput source="petr:itinerantDetails" multiline fullWidth />
    </>
)

export default ServiceInputs;
