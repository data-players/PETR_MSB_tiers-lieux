import React from 'react';
import { List, SimpleList } from "react-admin";
import HomeIcon from '@material-ui/icons/Build';
import { Avatar } from "@material-ui/core";
import { ListActionsWithPermissions } from '@semapps/auth-provider'
import PersonFilterSidebar from './PersonSidebar'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import FeedIcon from '@mui/icons-material/Feed';
import { AvatarWithLabelField } from '@semapps/field-components';
import { GridList } from '@semapps/list-components';



const isIframe = window !== window.top;


const PersonList = props => (
    <>
        {isIframe ? null : <BreadcrumbsItem to='/Personnes'>Personne</BreadcrumbsItem> } 
        <List 
        aside={<PersonFilterSidebar />}
        actions={<ListActionsWithPermissions exporter={false} />}
        perPage={25}
        // pagination={false}
        {...props}
        >
          <GridList xs={6} sm={2} linkType="show" externalLinks>
            <AvatarWithLabelField label="pair:label" image="image" />
          </GridList>        
        
        
        </List>
    </>
)

export default PersonList;


