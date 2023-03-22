import React from 'react';
import { SaveButton, SimpleForm, TextInput } from "ra-ui-materialui";
import { Toolbar } from 'react-admin';
import Edit from "../../layout/edit/Edit";
import PersonTitle from './PersonTitle';
import MarkdownInput from '../../markdown/MarkdownInput'

const NoDeleteToolBar = props => (
  <Toolbar {...props} >
    <SaveButton redirect="list" />
  </Toolbar>
)

export const PersonEdit = props => (
  <Edit title={<PersonTitle />} {...props} >
    <SimpleForm toolbar={<NoDeleteToolBar />}  redirect="list" >
      <TextInput source="pair:label" fullWidth />
      <MarkdownInput label="Description" multiline source="pair:description" fullWidth />
    </SimpleForm>
  </Edit>
)

export default PersonEdit;
