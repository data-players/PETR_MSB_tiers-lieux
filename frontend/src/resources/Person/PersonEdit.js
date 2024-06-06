import React from 'react';
import { SaveButton, SimpleForm, TextInput } from "ra-ui-materialui";
import { Toolbar } from 'react-admin';
import Edit from "../../layout/edit/Edit";
import PersonTitle from './PersonTitle';
import {SkillsInput} from '../../inputs'
import MarkdownInput from '../../markdown/MarkdownInput'

const NoDeleteToolBar = props => (
  <Toolbar {...props} >
    <SaveButton redirect="list" />
  </Toolbar>
)

export const PersonEdit = props => (
  <Edit title={<PersonTitle />} {...props} >
    <SimpleForm toolbar={<NoDeleteToolBar />}  redirect="list" >
      <TextInput label="Nom complet" source="pair:label" fullWidth />
      <MarkdownInput label="Description" multiline source="pair:description" fullWidth />
      <TextInput label="Id Openbadge" source="petr:openbadgeId" helperText="" fullWidth />

      <a href="https://app.petr-msb.data-players.com/Page/https%3A%2F%2Fdata.petr-msb.data-players.com%2Fpages%2F6661e9285e375306ed6ba40b/show" target='_blank' >Besoin d'aide pour trouver votre ID openbadge?</a>
      <SkillsInput  source="pair:offers"/>
    </SimpleForm>
  </Edit>
)

export default PersonEdit;
