import React from 'react';

import CloseIcon from '@material-ui/icons/Close';
import { 
  NumberField,
  ReferenceField,
  SimpleShowLayout,
  TextField
 } from 'react-admin';

import closeModal from './closeModal';
import useStyles from './OrganizationShowUseStyles';

const OrganizationShowEquipmentLayout = ({...props}) => {
  const classes = useStyles();
  return (
    <SimpleShowLayout className={classes.modal}>
      <CloseIcon className={classes.modalCloseIcon} onClick={closeModal}/>
      <TextField source="pair:label" />
      <ReferenceField source="petr:hasEquipmentType" reference="EquipmentType" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <TextField source="pair:description" />
      <TextField source="petr:model" />
      <NumberField source="petr:amount" />
      <ReferenceField source="petr:hasRate" reference="Rate" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <TextField source="petr:availablity" />
      <ReferenceField source="petr:hasAccessModality" reference="AccessModality" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <ReferenceField source="pair:hasLocation" reference="Space" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
    </SimpleShowLayout>
  )
}

export default OrganizationShowEquipmentLayout;