import React from 'react';
import { List } from 'react-admin';

import PanToolIcon from '@material-ui/icons/PanTool';

import { SimpleList } from '@semapps/archipelago-layout';

const EquipmentListInAdmin = props => {
  return (
    <>
      <div>InAdmin</div>
      <List {...props}>
        <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <PanToolIcon />} linkType="show" />
      </List>
    </>
  );
};

export default EquipmentListInAdmin;