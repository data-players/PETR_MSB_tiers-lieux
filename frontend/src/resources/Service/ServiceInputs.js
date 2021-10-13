import React from 'react';
import {
  ArrayInput,
  BooleanInput,
  TextInput,
  NumberInput,
  SelectInput,
  required,
  ReferenceInput,
  SimpleFormIterator
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
      <ArrayInput source="petr:hasLabel">
        <SimpleFormIterator>
          <ReferenceInput reference="Label">
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
      <BooleanInput source="petr:itinerant" defaultValue={false} />
      <MarkdownInput source="petr:itinerantDetails" multiline fullWidth />
    </>
)

export default ServiceInputs;
