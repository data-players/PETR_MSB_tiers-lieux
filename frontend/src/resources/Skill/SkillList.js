import React from 'react';
import { List, SimpleList } from "react-admin";
import HomeIcon from '@material-ui/icons/Build';
import { Avatar } from "@material-ui/core";
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

const isIframe = window !== window.top;

const AdList = props => (
  <>
      {isIframe ? null : <BreadcrumbsItem to='/Ads'>Compétence</BreadcrumbsItem> } 
      <List {...props}>
        <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <Avatar width="100%"><HomeIcon /></Avatar>} linkType="show" />
      </List>
  </>

);


export default AdList;
