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
import CustomLabel from '../../../addons/CustomLabel';

const OrganizationShowSpaceLayout = ({...props}) => {
  const classes = useStyles();
  return (
    <SimpleShowLayout className={classes.modal} resource="Space">
      <CloseIcon className={classes.modalCloseIcon} onClick={closeModal}/>
      <TextField source="pair:label" label={<CustomLabel label="Libellé :" />}/>
      <TextField source="pair:description" label={<CustomLabel label="Description :" />} />
      <ReferenceField source="petr:hasRate" reference="Rate" link={false} label={<CustomLabel label="Tarif :" />}>
        <TextField source="pair:label" />
      </ReferenceField> 
      <NumberField source="petr:capacity" label={<CustomLabel label="Capacité :" />}/>
      <ReferenceField source="petr:hasSpaceType" reference="SpaceType" link={false} label={<CustomLabel label="Type d'Espace :" />}>
        <TextField source="pair:label" />
      </ReferenceField>
      <ReferenceField source="pair:locationOf" reference="Equipment" link={false} label={<CustomLabel label="Localisation :" />}>
        <TextField source="pair:label" />
      </ReferenceField>
    </SimpleShowLayout>
  )
}

export default OrganizationShowSpaceLayout;
