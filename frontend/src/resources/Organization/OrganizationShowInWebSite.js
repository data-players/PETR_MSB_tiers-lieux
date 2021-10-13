import React from 'react';

import { Grid, Typography, makeStyles } from '@material-ui/core';
import { 
  ArrayField,
  BooleanField,
  Datagrid,
  NumberField,
  ReferenceField,
  ReferenceManyField,
  SimpleShowLayout,
  Tab,
  TabbedShowLayout,
  TextField,
  useRecordContext
} from 'react-admin';

import { SeparatedListField, Show } from "@semapps/archipelago-layout";
import { MarkdownField } from '@semapps/markdown-components';

import FullWidthBox from '../../commons/FullWidthBox';
import MultipleImagesField from '../../components/MultipleImagesField'

import OrganizationShowContactLayout from './OrganizationShowContactLayout';
import OrganizationShowDetailLayout from './OrganizationShowDetailLayout';
import useStyles from './OrganizationShowUseStyles';

const EquipmentShow = () => {
  const classes = useStyles();
  
  return (
    <SimpleShowLayout>
      <TextField source="pair:label" />
      <ReferenceField source="petr:hasEquipmentType" reference="EquipmentType" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <TextField source="pair:description" />
      <TextField source="petr:model" />
      <NumberField source="petr:amount" />
      <ReferenceField source="petr:hasRate" reference="Rate" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <TextField source="petr:availablity" />
      <ReferenceField source="petr:hasAccessModality" reference="AccessModality" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <ReferenceField source="pair:hasLocation" reference="Space" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
    </SimpleShowLayout>
  )
}

const SpaceShow = () => {
  const classes = useStyles();
  
  return (
    <SimpleShowLayout>
      <TextField source="pair:label" />
      <TextField source="pair:description" />
      <ReferenceField source="petr:hasRate" reference="Rate" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <NumberField source="petr:capacity" />
      <ReferenceField source="petr:hasSpaceType" reference="SpaceType" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <ReferenceField source="pair:locationOf" reference="Equipment" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
    </SimpleShowLayout>
  )
}

const ServiceShow = () => {
  const classes = useStyles();
  
  return (
    <SimpleShowLayout>
      <TextField source="pair:label" />
      <ReferenceField source="petr:hasRate" reference="Rate" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <ReferenceField source="petr:hasLabel" reference="Label" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <ReferenceField source="petr:hasAudience" reference="Audience" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <BooleanField source="petr:itinerant" />
      <TextField source="petr:itinerantDetails" />
    </SimpleShowLayout>
  )
}

const OrganizationShowInWebSite = ({...props}) => {
  const classes = useStyles();
  
  console.log(0, props);
  
  return (
    <Show {...props}>
      <Grid container spacing={2}>
      
        <Grid item xs={12} md={3}>
          <OrganizationShowDetailLayout {...props} />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TabbedShowLayout>
          
            <Tab label="Principal">
              <FullWidthBox className={classes.innerContainer}>
                <Typography component="h2" className={classes.title}>
                  <span>InWebSite : </span>
                  <TextField source="pair:label" />
                </Typography>
                <Typography component="div" className={classes.description}>
                  <TextField source="pair:description" />
                </Typography>
                <MultipleImagesField source="pair:depictedBy" max={2} />
              </FullWidthBox>
            </Tab>
            
            <Tab label="Equipements">
              <ReferenceManyField
                addLabel={false}
                reference="Equipment"
                target="petr:equipmentOfferedBy"
              >
                <Datagrid expand={<EquipmentShow />}>
                  <TextField source="pair:label" />
                </Datagrid>
              </ReferenceManyField>
            </Tab>
            
            <Tab label="Spaces">
              <ReferenceManyField
                addLabel={false}
                reference="Space"
                target="petr:spaceOfferedBy"
              >
                <Datagrid expand={<SpaceShow />}>
                  <TextField source="pair:label" />
                </Datagrid>
              </ReferenceManyField>
            </Tab>
            
            <Tab label="Services">
              <ReferenceManyField
                addLabel={false}
                reference="Service"
                target="petr:serviceOfferedBy"
              >
                <Datagrid expand={<ServiceShow />}>
                  <TextField source="pair:label" />
                </Datagrid>
              </ReferenceManyField>
            </Tab>
            
          </TabbedShowLayout>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <OrganizationShowContactLayout />
        </Grid>
        
      </Grid>
    </Show>
  );
};

export default OrganizationShowInWebSite;