import React from 'react';
import Show from "../../layout/show/Show";
import PersonTitle from "./PersonTitle";
import MarkdownField from '../../commons/fields/MarkdownField';
import {  useRecordContext } from 'react-admin';
  
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
            <OpenbadgePassportComponent source="petr:openbadgeId" />
        </>
    </Show>
);

export default PersonShow;