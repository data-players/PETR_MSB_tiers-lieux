import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'react-admin';
import { GridList, ChipList } from '@semapps/list-components';
import ReferenceArrayField from '../../../commons/fields/ReferenceArrayField';


const TopicShow = (props) => {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source="pair:label" addLabel={false}/>
                <ReferenceArrayField reference="Event" source="pair:topicOf" filter={{ type: "pair:Event" }} label="Événements" addLabel={true}>
                    <ChipList primaryText="pair:label" linkType="show" externalLinks />
                </ReferenceArrayField>
                <ReferenceArrayField reference="Ads" source="pair:topicOf" filter={{ type: "petr:Ads" }} label="Annonces" addLabel={true}>
                    <ChipList primaryText="pair:label" linkType="show" externalLinks />
                </ReferenceArrayField>
                <ReferenceArrayField reference="Person" source="pair:topicOf" filter={{ type: "pair:Person" }} label="Personnes" addLabel={true}>
                    <ChipList primaryText="pair:label" linkType="show" externalLinks />
                </ReferenceArrayField>
                <ReferenceArrayField reference="Organization" source="pair:topicOf" filter={{ type: "pair:Organization" }} label="Organisations" addLabel={true}>
                    <ChipList primaryText="pair:label" linkType="show" externalLinks />
                </ReferenceArrayField>
            </SimpleShowLayout>
        </Show>
    );
};

export default TopicShow;
