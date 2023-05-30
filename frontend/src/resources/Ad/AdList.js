import React from 'react';
import { List, SimpleList } from "react-admin";
import HomeIcon from '@material-ui/icons/Build';
import { Avatar } from "@material-ui/core";
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

const isIframe = window !== window.top;

const AdList = props => (
  <>
      {isIframe ? null : <BreadcrumbsItem to='/Ads'>Annonce</BreadcrumbsItem> } 
      <List sort={{ field: 'petr:date', order:'ASC' }} {...props}>
        <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <Avatar width="100%"><HomeIcon /></Avatar>} linkType="edit" />
      </List>
  </>

);


export default AdList;
