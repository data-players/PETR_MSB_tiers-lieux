import React from 'react';

import { Grid, isWidthDown, makeStyles } from '@material-ui/core';
import { Tab, TabbedShowLayout, useShowController, Datagrid, ReferenceManyField, TextField } from 'react-admin';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { Show }  from 'react-admin';
import OrganizationShowContactLayout from './OrganizationShowContactLayout';
import OrganizationShowMainLayout from './OrganizationShowMainLayout';
import OrganizationShowNavLayout from './OrganizationShowNavLayout';
import OrganizationShowEquipmentLayout from './OrganizationShowEquipmentLayout';
import OrganizationShowMainTitle from './OrganizationShowMainTitle';
import OrganizationShowSpaceLayout from './OrganizationShowSpaceLayout';
import OrganizationShowServiceLayout from './OrganizationShowServiceLayout';

import { GridList, ChipList } from '@semapps/list-components';
import { ReferenceArrayField } from '@semapps/field-components';

const isIframe = window !== window.top;

const useStyles = makeStyles((theme) => ({
  showContainer: {
    "& #react-admin-title": {
      display: 'none',
    },
  }
}));

const OrganizationShow = ({...props}) => {
  const classes = useStyles();
  const { record } = useShowController(props);
  const isIframe = window !== window.top;

  if (isIframe) {
    return (
      <>
      <Show actions={<></>} className={classes.showContainer}  {...props} >
        <TabbedShowLayout value={4} >
          <Tab label="Principal">
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <OrganizationShowContactLayout {...props} />
                <OrganizationShowNavLayout {...props} />
              </Grid>
              <Grid item xs={12} md={9}>
                <OrganizationShowMainLayout label={record ? record["pair:label"]: ""} {...props} />
              </Grid>
              <Grid item xs={12} md={3}>
              </Grid>
            </Grid>
          </Tab>
          <Tab label="Equipements">
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <OrganizationShowContactLayout {...props} />
                <OrganizationShowNavLayout {...props} />
              </Grid>
              <Grid item xs={12} md={9} style={{paddingTop: "25px"}} >
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
              </Grid>
              <Grid item xs={12} md={3}>
              </Grid>
            </Grid>    
          </Tab>
          <Tab label="Espaces">
            <Grid container spacing={2}>
              <Grid item xs={12} md={3} >
                <OrganizationShowContactLayout {...props} />
                <OrganizationShowNavLayout {...props} />
              </Grid>
              <Grid item xs={12} md={9} style={{paddingTop: "25px"}} >
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
              </Grid>
              <Grid item xs={12} md={3}>
              </Grid>
            </Grid>
          </Tab>
          <Tab label="Services">
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <OrganizationShowContactLayout {...props} />
                <OrganizationShowNavLayout {...props} />
              </Grid>
              <Grid item xs={12} md={9} style={{paddingTop: "25px"}} >
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
              </Grid>
              <Grid item xs={12} md={3}>
              </Grid>
            </Grid>
          </Tab>
        </TabbedShowLayout>
      </Show>
    </>
    )
  } else {
    return (
      <>
        <BreadcrumbsItem to='/'>Cartographie</BreadcrumbsItem>
        <Show className={classes.showContainer}  {...props} >
          <TabbedShowLayout value={4} >
            <Tab label="Principal">
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <OrganizationShowContactLayout {...props} />
                  <OrganizationShowNavLayout {...props} />
                </Grid>
                <Grid item xs={12} md={9}>
                  <OrganizationShowMainLayout label={record ? record["pair:label"]: ""} {...props} />
                </Grid>
                <Grid item xs={12} md={3}>
                </Grid>
              </Grid>
            </Tab>
            <Tab label="Equipements">
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <OrganizationShowContactLayout {...props} />
                  <OrganizationShowNavLayout {...props} />
                </Grid>
                <Grid item xs={12} md={9} style={{paddingTop: "25px"}} >
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
                </Grid>
                <Grid item xs={12} md={3}>
                </Grid>
              </Grid>    
            </Tab>
            <Tab label="Espaces">
              <Grid container spacing={2}>
                <Grid item xs={12} md={3} >
                  <OrganizationShowContactLayout {...props} />
                  <OrganizationShowNavLayout {...props} />
                </Grid>
                <Grid item xs={12} md={9} style={{paddingTop: "25px"}} >
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
                </Grid>
                <Grid item xs={12} md={3}>
                </Grid>
              </Grid>
            </Tab>
            <Tab label="Services">
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <OrganizationShowContactLayout {...props} />
                  <OrganizationShowNavLayout {...props} />
                </Grid>
                <Grid item xs={12} md={9} style={{paddingTop: "25px"}} >
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
                </Grid>
                <Grid item xs={12} md={3}>
                </Grid>
              </Grid>
            </Tab>
            <Tab label="Personnes">
              <ReferenceArrayField reference="Person" source="pair:affiliates" label={false}>
                <GridList xs={6} sm={4} md={4} linkType="show">
                  <TextField source="pair:label" />
                </GridList>
              </ReferenceArrayField>
            </Tab>
          </TabbedShowLayout>
        </Show>
      </>
    );
  }
};

export default OrganizationShow;