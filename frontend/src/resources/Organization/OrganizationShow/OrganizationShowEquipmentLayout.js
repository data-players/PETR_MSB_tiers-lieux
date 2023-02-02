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

const OrganizationShowEquipmentLayout = ({...props}) => {
  const classes = useStyles();
  return (

      <SimpleShowLayout className={classes.modal} resource="Equipment">
        <CloseIcon className={classes.modalCloseIcon} onClick={closeModal}/>
        <TextField source="pair:label" label={<CustomLabel label="Libellé :" />}/>
        <ReferenceField source="petr:hasEquipmentType" reference="EquipmentType" link={false} label={<CustomLabel label="Type d'équipement :" />}>
          <TextField source="pair:label" />
        </ReferenceField>
        <TextField source="pair:description" label={<CustomLabel label="Description :" />}/>
        <TextField source="petr:model" label={<CustomLabel label="Modèle :" />}/>
        <NumberField source="petr:amount" label={<CustomLabel label="Quantité :" />}/>
        <ReferenceField source="petr:hasRate" reference="Rate" link={false} label={<CustomLabel label="Tarif :" />}>
          <TextField source="pair:label" />
        </ReferenceField>
        <TextField source="petr:availablity" label={<CustomLabel label="Disponibilité :" />}/>
        <ReferenceField source="petr:hasAccessModality" reference="AccessModality" link={false} label={<CustomLabel label="Modalités d'accès :" />}>
          <TextField source="pair:label" />
        </ReferenceField>
        <ReferenceField source="pair:hasLocation" reference="Space" link={false} label={<CustomLabel label="Lieux :" />}>
          <TextField source="pair:label" />
        </ReferenceField>
      </SimpleShowLayout>

  )
}

export default OrganizationShowEquipmentLayout;
