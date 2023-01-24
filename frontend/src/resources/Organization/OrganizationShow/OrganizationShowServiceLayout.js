import React from 'react';

import CloseIcon from '@material-ui/icons/Close';
import {
  BooleanField,
  ReferenceField,
  SimpleShowLayout,
  TextField
 } from 'react-admin';

import closeModal from './closeModal';
import useStyles from './OrganizationShowUseStyles';
import CustomLabel from '../../../addons/CustomLabel';

const OrganizationShowServiceLayout = ({...props}) => {
  const classes = useStyles();
  return (
    <SimpleShowLayout className={classes.modal} resource="Service">
      <CloseIcon className={classes.modalCloseIcon} onClick={closeModal}/>
      <TextField source="pair:label" label={<CustomLabel label="Libellé :" />}/>
      <ReferenceField source="petr:hasServiceType" reference="ServiceType" link={false} label={<CustomLabel label="Type de Service :" />}>
        <TextField source="pair:label" />
      </ReferenceField>
      <ReferenceField source="petr:hasRate" reference="Rate" link={false} label={<CustomLabel label="Tarif :" />}>
        <TextField source="pair:label" />
      </ReferenceField>
      <ReferenceField source="petr:hasLabel" reference="Label" link={false} label={<CustomLabel label="Label :" />}>
        <TextField source="pair:label" />
      </ReferenceField>
      <ReferenceField source="petr:hasAudience" reference="Audience" link={false} label={<CustomLabel label="Public :" />}>
        <TextField source="pair:label" />
      </ReferenceField>
      <BooleanField source="petr:itinerant" label={<CustomLabel label="Itinérant :" />} />
      { props.record["petr:itinerant"] &&
        <TextField source="petr:itinerantDetails" />
      }
    </SimpleShowLayout>
  )
}

export default OrganizationShowServiceLayout;
