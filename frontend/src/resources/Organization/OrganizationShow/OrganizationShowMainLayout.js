import React from 'react';
import { useLocation } from 'react-router';

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
import OrganizationShowMainTitle from './OrganizationShowMainTitle';
import OrganizationShowServiceLayout from './OrganizationShowServiceLayout';
import OrganizationShowSpaceLayout from './OrganizationShowSpaceLayout';

import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import useStyles from './OrganizationShowUseStyles';


const OrganizationShowMainLayout = ({...props}) => {
  
  const classes = useStyles();
  
  const currentUri = useLocation().pathname;
  const showIndex = currentUri.search('/show');
  const showSuffix = currentUri.substring(showIndex, currentUri.length);
  let breadcrumbsTabLabel = false;
  switch (showSuffix) {
    case '/show/1' : breadcrumbsTabLabel = 'Equipements'; break;
    case '/show/2' : breadcrumbsTabLabel = 'Espaces'; break;
    case '/show/3' : breadcrumbsTabLabel = 'Services'; break;
  }
  
  console.log(currentUri.replace('showSuffix', '/show'));
  
  return (
    <>
      { ! props.isAdminContext &&
        <BreadcrumbsItem to={currentUri.replace(showSuffix, '/show')}>{props.label}</BreadcrumbsItem>
      }
      { ! props.isAdminContext && breadcrumbsTabLabel &&
        <BreadcrumbsItem to={currentUri}>{breadcrumbsTabLabel}</BreadcrumbsItem>
      }
      <TabbedShowLayout className={classes.tabbedShowLayout}>
        <Tab label="Principal">
          <FullWidthBox className={classes.innerContainer}>
            <OrganizationShowMainTitle label={""}/> 
            <Typography component="div" className={classes.description}>
              <TextField source="pair:description" />
            </Typography>
            <MultipleImagesField source="pair:depictedBy" max={2} label={false}/>
          </FullWidthBox>
        </Tab>
        <Tab label="Equipements">
          <FullWidthBox className={classes.innerContainer}>
            <OrganizationShowMainTitle label={"Les équipements de "}/> 
            <ReferenceManyField
              addLabel={false}
              reference="Equipment"
              target="petr:equipmentOfferedBy"
            >
              <Datagrid expand={<OrganizationShowEquipmentLayout {...props} />}>
                <TextField source="pair:label" label={null} />
              </Datagrid>
            </ReferenceManyField>
          </FullWidthBox>
        </Tab>
        <Tab label="Spaces">
          <FullWidthBox className={classes.innerContainer}>
            <OrganizationShowMainTitle label={"Les espaces de "}/> 
            <ReferenceManyField
              addLabel={false}
              reference="Space"
              target="petr:spaceOfferedBy"
            >
              <Datagrid expand={<OrganizationShowSpaceLayout {...props} />}>
                <TextField source="pair:label" label={null} />
              </Datagrid>
            </ReferenceManyField>
          </FullWidthBox>
        </Tab>
        <Tab label="Services">
          <FullWidthBox className={classes.innerContainer}>
            <OrganizationShowMainTitle label={"Les services de "}/>
            <ReferenceManyField
              addLabel={false}
              reference="Service"
              target="petr:serviceOfferedBy"
            >
              <Datagrid expand={<OrganizationShowServiceLayout {...props} />}>
                <TextField source="pair:label" label={null} />
              </Datagrid>
            </ReferenceManyField>
          </FullWidthBox>
        </Tab>
      </TabbedShowLayout>
    </>
  );
};

export default OrganizationShowMainLayout;