import React from 'react';
import { List, SimpleList } from "react-admin";
import HomeIcon from '@material-ui/icons/Build';
import FeedIcon from '@mui/icons-material/Feed';
import { Avatar } from "@material-ui/core";
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import AdFilterSidebar from './AdFilterSidebar';

const isIframe = window !== window.top;

const AdList = props => (
  <>
      {isIframe ? null : <BreadcrumbsItem to='/Ads'>Annonce</BreadcrumbsItem> } 
      <List sort={{ field: 'petr:date', order:'ASC' }} aside={<AdFilterSidebar />} {...props}>
        <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <Avatar width="100%"><FeedIcon /></Avatar>} linkType="show" />
      </List>
  </>

);


export default AdList;
