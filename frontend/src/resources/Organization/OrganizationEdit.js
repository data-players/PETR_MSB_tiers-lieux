import React from 'react';

import { makeStyles } from '@material-ui/core';
import { TextInput } from "ra-ui-materialui";
import { ArrayInput, FormTab, ImageInput, NumberInput, SelectInput, SimpleFormIterator, TabbedForm, required } from 'react-admin';

import { Edit } from "@semapps/archipelago-layout";
import { MapField } from '@semapps/geo-components';
import { MarkdownInput } from '@semapps/markdown-components'
import { ImageField, ReferenceInput, ReificationArrayInput } from '@semapps/semantic-data-provider';

import PairLocationInput from '../../components/PairLocationInput';
import Title from '../_Components/Title';

const useStyles = makeStyles((theme) => ({
  equipmentFormContainer: {
    '& section' : {
      flexDirection: 'column',
    }
  },
}));

export const OrganizationEdit = props => {
  const classes = useStyles();
  return (
    <Edit title={<Title />} {...props} >
      <TabbedForm>
        <FormTab label="Principal">
          <TextInput source="pair:label" fullWidth validate={[required()]} />
          <ReferenceInput 
            source="pair:hasType" 
            reference="OrganizationType" 
            validate={[required()]}
          >
            <SelectInput optionText="pair:label" />
          </ReferenceInput>
          <MarkdownInput source="pair:description" multiline fullWidth />
          <PairLocationInput source="pair:hasLocation" fullWidth />
          <ImageInput source="petr:logo" accept="image/*">
            <ImageField source="src" />
          </ImageInput>
          <ImageInput source="pair:depictedBy" accept="image/*" multiple>
            <ImageField source="src" />
          </ImageInput>
          <ArrayInput source="petr:videos">
            <SimpleFormIterator>
              <TextInput label="Video url"/>
            </SimpleFormIterator>
          </ArrayInput>
          <ReferenceInput 
            source="petr:hasLegalStatus" 
            reference="LegalStatus" 
            validate={[required()]}
          >
            <SelectInput optionText="pair:label" />
          </ReferenceInput>
          <TextInput source="pair:e-mail" type="email" fullWidth/>
          <TextInput source="pair:phone" fullWidth />
          <TextInput source="pair:webPage" fullWidth />
          <ArrayInput source="petr:socialMedias">
            <SimpleFormIterator>
              <TextInput />
            </SimpleFormIterator>
          </ArrayInput>
          <ArrayInput source="petr:hasLabel">
            <SimpleFormIterator>
              <ReferenceInput reference="Label">
              <SelectInput optionText="pair:label" />
            </ReferenceInput>
            </SimpleFormIterator>
          </ArrayInput>
          <ArrayInput source="petr:hasNetwork">
            <SimpleFormIterator>
              <ReferenceInput reference="Network">
              <SelectInput optionText="pair:label" />
            </ReferenceInput>
            </SimpleFormIterator>
          </ArrayInput>
          <ReferenceInput 
            source="petr:hasAudience"
            reference="Audience" 
          >
            <SelectInput optionText="pair:label" />
          </ReferenceInput>
          {/* EQUIPMENTS*/}
        </FormTab>
        <FormTab label="Equipements">
          <ReificationArrayInput 
            source="petr:equipmentOffers" 
            reificationClass="pair:Equipment" 
            class={classes.equipmentFormContainer}
          >
            <ReferenceInput 
              source="petr:hasEquipmentType"
              reference="EquipmentType"
              validate={[required()]}
            >
              <SelectInput optionText="pair:label" />
            </ReferenceInput>
            <TextInput source="pair:description" fullWidth />
            <TextInput source="petr:model" fullWidth />
            <NumberInput source="petr:amount" defaultValue={1} fullWidth validate={[required()]}/>
            <ReferenceInput 
              source="petr:hasEquipmentRate"
              reference="EquipmentRate"
              validate={[required()]}
            >
              <SelectInput optionText="pair:label" />
            </ReferenceInput>
            <TextInput source="petr:availablity" fullWidth />{/* TODO */}
            <ReferenceInput 
              source="petr:hasEquipmentAccessModality"
              reference="EquipmentAccessModality"
              validate={[required()]}
            >
              <SelectInput optionText="pair:label" />
            </ReferenceInput>
          </ReificationArrayInput>
        </FormTab>
      </TabbedForm>
    </Edit>
  );
}

export default OrganizationEdit;
