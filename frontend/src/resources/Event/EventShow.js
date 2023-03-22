import React from 'react';
import { ChipField, SingleFieldList, TextField, DateField } from 'react-admin';
import { Grid } from '@material-ui/core';
import Show from '../../layout/show/Show.js';
import UrlArrayField from '../../components/UrlArrayField';
import SocialNetworkArrayIcon from '../../components/SocialNetworkArrayIcon';
import VideoPlayer from '../../addons/videoComponent';
import { MapField } from '@semapps/geo-components';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { ReferenceArrayField, AvatarWithLabelField } from '@semapps/field-components';
import { GridList } from '@semapps/list-components';
import {Hero, SideList} from '../../commons/lists/';
import MarkdownField from '../../commons/fields/MarkdownField';
import EventTitle from './EventTitle.js';


const isIframe = window !== window.top;

const EventShow = props => (
  <>
     {isIframe ? null : <BreadcrumbsItem to='/Event'>Agenda</BreadcrumbsItem> }
    <Show title={<EventTitle />}  {...props}>
      <Grid container spacing={5} style={{ margin:'0px', width:"100%"}} >
        <Grid xs={12} sm={8} showLabel style={{width: "100%", paddingRight: "2%"}}>
          <Hero image="pair:depictedBy" >
            <DateField label="Date de début" source="pair:startDate" options={{ year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute : 'numeric' }} showTime />
            <DateField label="Date de fin" source="pair:endDate" options={{ year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute : 'numeric' }} showTime />
          </Hero>
          <TextField source="pair:comment" variant="h5" addLabel={false}/>
          <SideList>
            <MarkdownField source="pair:description" />
            <ReferenceArrayField label="Organisation en charge de l'évènement" reference="Organization" source="pair:deliveredBy" sort={{ field: 'type', order: 'ASC' }}>
              <GridList xs={6} sm={2} linkType="show" externalLinks>
                <AvatarWithLabelField label="pair:label" image="petr:logo" />
              </GridList>
            </ReferenceArrayField>
            <VideoPlayer source="pair:video" addLabel/>
          </SideList>
        </Grid>
        <Grid xs={12} sm={4} showLabel>
          <SideList>
              <MapField
                source="pair:hasLocation"
                address={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:label']}
                latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
                longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
              />
              <SocialNetworkArrayIcon source="pair:aboutPage" addLabel/>
              <UrlArrayField source="pair:homePage" addLabel/>

              <ReferenceArrayField reference="Topic" source="pair:hasTopic" sort={{ field: 'type', order: 'ASC' }} style={{height:"20%"}}>
                <GridList xs={6} linkType="show" externalLinks>
                  <ChipField source="pair:label" style={{background: "pink"}}/>
                </GridList>
              </ReferenceArrayField>
              </SideList>

        </Grid>
      </Grid>
    </Show>
  </>
);

export default EventShow;
