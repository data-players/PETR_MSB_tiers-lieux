import React from 'react';

import { 
  BooleanField,
  ReferenceField,
  SimpleShowLayout,
  TextField
 } from 'react-admin';

import useStyles from './OrganizationShowUseStyles';

const OrganizationShowServiceLayout = ({...props}) => {
  const classes = useStyles();
  return (
    <SimpleShowLayout>
      <TextField source="pair:label" />
      <ReferenceField source="petr:hasRate" reference="Rate" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <ReferenceField source="petr:hasLabel" reference="Label" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <ReferenceField source="petr:hasAudience" reference="Audience" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <BooleanField source="petr:itinerant" />
      { props.record["petr:itinerant"] &&
        <TextField source="petr:itinerantDetails" />
      }
    </SimpleShowLayout>
  )
}

export default OrganizationShowServiceLayout;