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

const OrganizationShowSpaceLayout = ({...props}) => {
  const classes = useStyles();
  return (
    <SimpleShowLayout className={classes.modal}>
      <CloseIcon className={classes.modalCloseIcon} onClick={closeModal}/>
      <TextField source="pair:label" />
      <TextField source="pair:description" />
      <ReferenceField source="petr:hasRate" reference="Rate" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <NumberField source="petr:capacity" />
      <ReferenceField source="petr:hasSpaceType" reference="SpaceType" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <ReferenceField source="pair:locationOf" reference="Equipment" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
    </SimpleShowLayout>
  )
}

export default OrganizationShowSpaceLayout;