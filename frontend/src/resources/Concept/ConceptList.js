import React from 'react';
import { SimpleList } from 'react-admin';
import { ListWithPermissions } from '@semapps/auth-provider';
import StyleIcon from '@material-ui/icons/Style';
import { ListActionsWithPermissions } from '@semapps/auth-provider'

const ConceptList = props => (
  <ListWithPermissions
  actions={<ListActionsWithPermissions exporter={false} />}
  {...props}>
    <SimpleList
      primaryText={record => record['pair:label']}
      leftAvatar={() => <StyleIcon />}
    />
  </ListWithPermissions>
);

export default ConceptList;
