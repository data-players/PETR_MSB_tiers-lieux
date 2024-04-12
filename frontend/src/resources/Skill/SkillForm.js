import React from 'react';
import {
  TextInput,
  SimpleForm
} from 'react-admin';
import {PersonsInput} from '../../inputs'
// import { SimpleForm, TextInput } from "ra-ui-materialui";

export const SkillForm = props => {
  const ifTwoLetters = ({ q }) => !!(q && q.length > 1);
  const filterOnlyLabel = { _predicates: ['pair:label'] };

  return (
  <SimpleForm>
    <TextInput source="pair:label" label="Nom" fullWidth />
    <PersonsInput source="pair:offeredBy" />
  </SimpleForm>
  )
}

export default SkillForm;
