import React from 'react';
import Show from "../../layout/show/Show";
import PersonTitle from "./PersonTitle";
import MarkdownField from '../../commons/fields/MarkdownField';
import { useRecordContext } from 'react-admin';
import { ChipList } from '@semapps/list-components';
import ReferenceArrayField from '../../commons/fields/ReferenceArrayField';
import { Labeled } from 'react-admin';

const OpenbadgePassportComponent = ({ source }) => {
    const record = useRecordContext();
    if (!record || !record[source]) return null;

    const link = "https://openbadgepassport.com/app/profile/" + record[source] + "/embed";

    return (
        <iframe width="90%" height="850" src={link} frameBorder="0" />
    )
}

const PersonShow = props => (
    <Show title={<PersonTitle />} {...props}>
        <>

            <Labeled label="Description" fullWidth={true}>
                <MarkdownField source="pair:description" />
            </Labeled>

            <Labeled label="Themes" fullWidth={true}>
                <ReferenceArrayField reference="Topic" source="pair:hasTopic" label="Topics">
                    <ChipList primaryText="pair:label" linkType="show" externalLinks />
                </ReferenceArrayField>
            </Labeled>

            <Labeled label="Organisations" fullWidth={true}>
                <ReferenceArrayField reference="Organization" source="pair:affiliatedBy">
                    <ChipList primaryText="pair:label" linkType="show" externalLinks />
                </ReferenceArrayField>
            </Labeled>

            <Labeled label="Openbadge" fullWidth={true}>
                <OpenbadgePassportComponent source="petr:openbadgeId" />
            </Labeled>
        </>
    </Show>
);

export default PersonShow;