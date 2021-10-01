import React from 'react';

import { makeStyles } from '@material-ui/core';
import { TextInput } from "ra-ui-materialui";
import { 
  ArrayInput,
  BooleanField,
  FormTab, 
  ImageInput, 
  NumberInput, 
  SelectInput, 
  SimpleFormIterator, 
  TabbedForm, 
  required,
  useRecordContext 
} from 'react-admin';

import { Edit } from "@semapps/archipelago-layout";
import { MapField } from '@semapps/geo-components';
import { MarkdownInput } from '@semapps/markdown-components'
import { ImageField, ReferenceInput, ReificationArrayInput } from '@semapps/semantic-data-provider';

import { EquipmentsInput } from '../../pair';
import PairLocationInput from '../../components/PairLocationInput';
import Title from '../_Components/Title';

const useStyles = makeStyles((theme) => ({
  resourceFormContainer: {
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
          <ArrayInput source="petr:hasLabels">
            <SimpleFormIterator>
              <ReferenceInput reference="Label">
              <SelectInput optionText="pair:label" />
            </ReferenceInput>
            </SimpleFormIterator>
          </ArrayInput>
          <ArrayInput source="petr:hasNetworks">
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
        </FormTab>
        {/* EQUIPMENTS */}
        <FormTab label="Equipements">
          <ReificationArrayInput 
            source="petr:equipmentOffers" 
            reificationClass="petr:Equipment" 
            class={classes.resourceFormContainer}
          >
            <ReferenceInput 
              source="petr:hasEquipmentType"
              reference="EquipmentType"
              validate={[required()]}
            >
              <SelectInput optionText="pair:label" />
            </ReferenceInput>
            <MarkdownInput source="pair:description" multiline fullWidth />
            <TextInput source="petr:model" fullWidth />
            <NumberInput source="petr:amount" defaultValue={1} fullWidth validate={[required()]} />
            <ReferenceInput 
              source="petr:hasRate"
              reference="Rate"
              validate={[required()]}
            >
              <SelectInput optionText="pair:label" />
            </ReferenceInput>
            <TextInput source="petr:availablity" fullWidth />{/* TODO */}
            <ReferenceInput 
              source="petr:hasAccessModality"
              reference="AccessModality"
              validate={[required()]}
            >
              <SelectInput optionText="pair:label" />
            </ReferenceInput>
          </ReificationArrayInput>
        </FormTab>
        {/* SPACES */}
        <FormTab label="Espaces">
          <ReificationArrayInput 
            source="petr:spaceOffers" 
            reificationClass="petr:Space" 
            class={classes.resourceFormContainer}
          >
            <TextInput source="pair:label" fullWidth validate={[required()]} />
            <MarkdownInput source="pair:description" multiline fullWidth />
            <ReferenceInput 
              source="petr:hasRate"
              reference="Rate"
              validate={[required()]}
            >
              <SelectInput optionText="pair:label" />
            </ReferenceInput>
            <NumberInput source="petr:capacity" defaultValue={1} fullWidth validate={[required()]} />
            <ReferenceInput 
              source="petr:hasSpaceType"
              reference="SpaceType"
              validate={[required()]}
            >
              <SelectInput optionText="pair:label" />
            </ReferenceInput>
            <EquipmentsInput source="petr:hasEquipments" />
          </ReificationArrayInput>
        </FormTab>
        {/* SERVICES */}
        <FormTab label="Services">
          <ReificationArrayInput 
            source="petr:serviceOffers" 
            reificationClass="petr:Service" 
            class={classes.resourceFormContainer}
          >
            <TextInput source="pair:label" fullWidth validate={[required()]} />
            <ReferenceInput 
              source="petr:hasRate"
              reference="Rate"
              validate={[required()]}
            >
              <SelectInput optionText="pair:label" />
            </ReferenceInput>
            <ArrayInput source="petr:hasLabels">
              <SimpleFormIterator>
                <ReferenceInput reference="Label">
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
            {/* TODO */}
            <BooleanField source="petr:itinerant" defaultValue={false} />
            <MarkdownInput source="petr:itinerantDetails" multiline fullWidth />
          </ReificationArrayInput>
        </FormTab>
      </TabbedForm>
    </Edit>
  );
}

export default OrganizationEdit;
