import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import { SimpleForm, TextInput } from "ra-ui-materialui";
import PersonTitle from './PersonTitle';
import MarkdownInput from '../../markdown/MarkdownInput'

export const PersonEdit = props => (
    <Edit title={<PersonTitle />} {...props} >
        <SimpleForm redirect="list" >
            <TextInput source="pair:label" fullWidth />
            <MarkdownInput multiline source="pair:description" fullWidth />
        </SimpleForm>
    </Edit>
)

export default PersonEdit;
