import React from 'react';

import { Typography } from '@material-ui/core';
import { 
  Datagrid,
  ReferenceManyField,
  Tab,
  TabbedShowLayout,
  TextField
 } from 'react-admin';

import FullWidthBox from '../../../commons/FullWidthBox';
import MultipleImagesField from '../../../components/MultipleImagesField'

import OrganizationShowEquipmentLayout from './OrganizationShowEquipmentLayout';
import OrganizationShowServiceLayout from './OrganizationShowServiceLayout';
import OrganizationShowSpaceLayout from './OrganizationShowSpaceLayout';
import useStyles from './OrganizationShowUseStyles';

const OrganizationShowMainLayout = ({...props}) => {
  
  const classes = useStyles();
  
  return (
    <TabbedShowLayout className={classes.tabbedShowLayout}>
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
          <Datagrid expand={<OrganizationShowEquipmentLayout {...props} />}>
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
          <Datagrid expand={<OrganizationShowSpaceLayout {...props} />}>
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
          <Datagrid expand={<OrganizationShowServiceLayout {...props} />}>
            <TextField source="pair:label" />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
    </TabbedShowLayout>
  );
};

export default OrganizationShowMainLayout;