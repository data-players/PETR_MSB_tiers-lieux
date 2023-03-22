import React from 'react';
import { CheckboxGroupInput } from "react-admin";
import { ReferenceArrayInput, MultiServerAutocompleteArrayInput } from "@semapps/input-components";

const ifTwoLetters = ({ q }) => !!(q && q.length > 1);
const filterOnlyLabel = { _predicates: ['pair:label'] };

export const OrganizationsInput = ({ label, source }) => (
    <ReferenceArrayInput label={label} reference="Organization" source={source} enableGetChoices={ifTwoLetters} filter={filterOnlyLabel}>
      <MultiServerAutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
    </ReferenceArrayInput>
  );  

export const ActorsInput = ({ label, source }) => (
<ReferenceArrayInput label={label} reference="Actor" source={source} enableGetChoices={ifTwoLetters} filter={filterOnlyLabel}>
    <MultiServerAutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
</ReferenceArrayInput>
);

export const ThemesCheckBoxInput = ({ label, source }) => (
    <ReferenceArrayInput label={label} source={source} reference="Topic" fullWidth>
        <CheckboxGroupInput optionText="pair:label" allowEmpty />
    </ReferenceArrayInput>
);