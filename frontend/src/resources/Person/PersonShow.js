import React from 'react';
import Show from "../../layout/show/Show";
import PersonTitle from "./PersonTitle";
import MarkdownField from '../../commons/fields/MarkdownField';
import {  useRecordContext, TextField } from 'react-admin';
import { GridList, ChipList } from '@semapps/list-components';
import ReferenceArrayField from './ReferenceArrayField';
  
const OpenbadgePassportComponent = ({source}) => {
    const record = useRecordContext();
    if (!record || !record[source]) return null;

    const link = "https://openbadgepassport.com/app/profile/" + record[source] + "/embed";

    return (
        <iframe width="90%" height="850" src={link} frameborder="0" />
    )
}

const PersonShow = props => (
    <Show title={<PersonTitle />} {...props}>
        <>
            <MarkdownField source="pair:description"/>
            <ReferenceArrayField reference="Skill" source="pair:offers">
                <ChipList primaryText="pair:label" linkType="show" externalLinks />
            </ReferenceArrayField>
            <OpenbadgePassportComponent source="petr:openbadgeId" />
        </>
    </Show>
);

export default PersonShow;