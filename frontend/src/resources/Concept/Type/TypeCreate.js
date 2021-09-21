import React from 'react';
import { SimpleForm, TextInput, SelectArrayInput } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';

const TypeCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
      <SelectArrayInput
        source="@type"
        choices={[
          { id: 'pair:OrganizationType', name: 'OrganizationType' },
        ]}
      />
    </SimpleForm>
  </Create>
);

export default TypeCreate;
