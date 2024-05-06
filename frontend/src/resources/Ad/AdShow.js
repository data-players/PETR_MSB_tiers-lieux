import React from 'react';
import Show from '../../layout/show/Show.js';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import MarkdownField from '../../commons/fields/MarkdownField.js';
import AdTitle from './AdTitle.js';
import { DateField, TextField } from 'react-admin';
import { Hero, MainList, SideList } from '../../commons/lists/index.js';
import { Grid } from '@material-ui/core';
import { GridList, ChipList } from '@semapps/list-components';
import { ReferenceArrayField, AvatarWithLabelField, ReferenceField } from '@semapps/field-components';

const isIframe = window !== window.top;

const AdShow = props => (
  <>
     {isIframe ? null : <BreadcrumbsItem to='/Ads'>Annonce</BreadcrumbsItem> }
     <Show title={<AdTitle />} {...props}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={9}>
          <MainList>
            <DateField source="petr:date" options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }} />
            <MarkdownField source="pair:description" />
          </MainList>
        </Grid>
        <Grid item xs={12} sm={3}>
          <SideList>
            <ReferenceArrayField reference="Organization" source="pair:involvedIn" sort={{ field: 'type', order: 'ASC' }}>
              <GridList xs={6} sm={4} md={4} linkType="show">
                <AvatarWithLabelField image="petr:logo" label="pair:label" />
              </GridList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Topic" source="pair:hasTopic">
              <ChipList primaryText="pair:label" linkType="show" externalLinks />
            </ReferenceArrayField>
            <ReferenceField source="petr:hasAdStatus" reference="AdStatus" link={false}>
              <TextField source="pair:label" />
            </ReferenceField>
          </SideList>
        </Grid>
      </Grid>
    </Show>
  </>
);

export default AdShow;
