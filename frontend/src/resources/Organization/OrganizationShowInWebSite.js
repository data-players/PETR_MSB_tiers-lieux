import React from 'react';

import { Grid, Typography, makeStyles } from '@material-ui/core';
import { 
  ArrayField,
  Datagrid,
  NumberField,
  ReferenceField,
  ReferenceManyField,
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
import OrganizationShowLoader from './OrganizationShowLoader';
import useStyles from './OrganizationShowUseStyles';

const EquipmentShow = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.equipmentContainer}>
      <ReferenceField source="petr:hasEquipmentType" reference="EquipmentType" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <TextField source="pair:description" />
      <TextField source="petr:model" />
      <NumberField source="petr:amount" />
      <ReferenceField source="petr:hasRate" reference="Rate" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
    </div>
  )
}

const OrganizationShowInWebSite = ({...props}) => {
  const classes = useStyles();
  
  return (
    <Show {...props}>
    
      <TabbedShowLayout>
        <Tab label="Principal">
            
          <Grid container spacing={2}>
            <OrganizationShowLoader />
            <Grid item xs={12} md={3}>
              <OrganizationShowDetailLayout />
            </Grid>
            <Grid item xs={12} md={6}>
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
            </Grid>
            <Grid item xs={12} md={3}>
              <OrganizationShowContactLayout />
            </Grid>
          </Grid>
        </Tab>
      
        {/* EQUIPMENTS */}
        <Tab label="Equipements">

          <ReferenceManyField
            addLabel={false}
            reference="Equipment"
            target="petr:equipmentOfferedBy"
          >
            <Datagrid expand={<EquipmentShow />}>
              <TextField source="pair:description" />
            </Datagrid>
          </ReferenceManyField>
          
        </Tab>
    
      </TabbedShowLayout>
  
    </Show>
    


  );
};

export default OrganizationShowInWebSite;