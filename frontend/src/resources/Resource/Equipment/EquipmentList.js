import React from 'react';
import { List, TextField } from 'react-admin';

const EquipmentList = props => {
  return (
    <List {...props}>
      <TextField source="pair:label" />
    </List>
  );
};

export default EquipmentList;