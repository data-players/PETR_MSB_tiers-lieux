import React from 'react';
import { List, SimpleList } from "react-admin";
import HomeIcon from '@material-ui/icons/Build';
import { Avatar } from "@material-ui/core";
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { ListActionsWithPermissions } from '@semapps/auth-provider'

const isIframe = window !== window.top;

const PageList = props => (
  <>
      {isIframe ? null : <BreadcrumbsItem to='/Page'>Page</BreadcrumbsItem> } 
      <List
      actions={<ListActionsWithPermissions exporter={false} />}
      {...props}>
        <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <Avatar width="100%"><HomeIcon /></Avatar>} linkType="edit" />
      </List>
  </>

);


export default PageList;
