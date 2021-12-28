import React, { useState } from 'react';
import {
  ArrayInput,
  BooleanInput,
  TextInput,
  SelectInput,
  required,
  ReferenceInput,
  SimpleFormIterator,
  SimpleForm
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';

export const ServiceForm = props => {

  const [itinerant, setItinerant] = useState({});

  return (
    <SimpleForm {...props}>
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
        source="petr:hasServiceType"
        reference="ServiceType"
        fullWidth
        validate={[required()]}
      >
        <SelectInput optionText="pair:label" validate={[required()]} />
      </ReferenceInput>
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
      <BooleanInput source="petr:itinerant" defaultValue={false} onChange={setItinerant} />
      { itinerant &&
        <MarkdownInput source="petr:itinerantDetails" multiline fullWidth />
      }
    </SimpleForm>
  )
}

export default ServiceForm;
