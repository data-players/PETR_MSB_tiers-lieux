import React from 'react';
import { useLocation } from 'react-router';

import { Box } from '@material-ui/core';
import { 
  Datagrid,
  ReferenceManyField,
  Tab,
  TabbedShowLayout,
  TextField
 } from 'react-admin';
 import { MarkdownField } from '@semapps/markdown-components';
import FullWidthBox from '../../../commons/FullWidthBox';
import MultipleImagesField from '../../../components/MultipleImagesField'

import OrganizationShowEquipmentLayout from './OrganizationShowEquipmentLayout';
import OrganizationShowMainTitle from './OrganizationShowMainTitle';
import OrganizationShowServiceLayout from './OrganizationShowServiceLayout';
import OrganizationShowSpaceLayout from './OrganizationShowSpaceLayout';

import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import useStyles from './OrganizationShowUseStyles';
import MainList from '../../../commons/lists/MainList/MainList';
import PictoAccessComponent from '../../../addons/PictoAccessComponent';

const OrganizationShowMainLayout = ({...props}) => {
  
  const classes = useStyles();
  
  const currentUri = useLocation().pathname;
  const showIndex = currentUri.search('/show');
  const showSuffix = currentUri.substring(showIndex, currentUri.length);
  const isIframe = window !== window.top;

  let breadcrumbsTabLabel = false;
  switch (showSuffix) {
    case '/show/1' : breadcrumbsTabLabel = 'Equipements'; break;
    case '/show/2' : breadcrumbsTabLabel = 'Espaces'; break;
    case '/show/3' : breadcrumbsTabLabel = 'Services'; break;
    default : breadcrumbsTabLabel = false;
  }
  
  return (
    <>
      {isIframe ? null : <BreadcrumbsItem to={currentUri.replace(showSuffix, '/show')}>{props.label}</BreadcrumbsItem>}
      { isIframe ? null : breadcrumbsTabLabel &&
        <BreadcrumbsItem to={currentUri}>{breadcrumbsTabLabel}</BreadcrumbsItem>
      }
      <TabbedShowLayout className={classes.tabbedShowLayout}>
        <Tab label="Principal">
          <FullWidthBox className={classes.innerContainer}>
            <OrganizationShowMainTitle label={""}/> 
            <Box className={classes.description} >
              <MainList >
                <MarkdownField addLabel={false} source="pair:description" />
              </MainList>
            </Box>
            <MultipleImagesField source="pair:depictedBy" label={false}/>
            <PictoAccessComponent source="petr:pictoAccessId" />
          </FullWidthBox>
        </Tab>
        <Tab label="Equipements">
          <FullWidthBox className={classes.innerContainer}>
            <OrganizationShowMainTitle label={"Les équipements de "} /> 
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