import React from 'react';

import { makeStyles } from '@material-ui/core';
import { SimpleForm, TextInput } from "ra-ui-materialui";
import { ArrayInput, BooleanInput, ImageInput, SelectInput, SimpleFormIterator, required } from 'react-admin';
 
import { MapField } from '@semapps/geo-components';
import { ImageField, ReferenceInput, ReificationArrayInput } from '@semapps/semantic-data-provider';
import { TimeInput } from '@semapps/date-components';

import PairLocationInput from '../../components/PairLocationInput';
import MarkdownInput from '../../markdown/MarkdownInput'

const useStyles = makeStyles((theme) => ({
  OpeningTimesForm: {
    '& section': {
      display: 'flex',
      '& > div': {
        marginRight: '8px',
      }
    }
  },
}));

export const OrganizationForm = props => {
  const classes = useStyles();
  return (
    <>
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
      <ArrayInput source="petr:openingTimesDay1">
        <SimpleFormIterator className={classes.OpeningTimesForm}>
          <TimeInput label="Heure de début" source="petr:startingTime" options={{ format: 'HH:mm', ampm: false }} />
          <TimeInput label="Heure de fin" source="petr:endingTime" options={{ format: 'HH:mm', ampm: false }} />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="petr:openingTimesDay2">
        <SimpleFormIterator className={classes.OpeningTimesForm}>
          <TimeInput label="Heure de début" source="petr:startingTime" options={{ format: 'HH:mm', ampm: false }} />
          <TimeInput label="Heure de fin" source="petr:endingTime" options={{ format: 'HH:mm', ampm: false }} />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="petr:openingTimesDay3">
        <SimpleFormIterator className={classes.OpeningTimesForm}>
          <TimeInput label="Heure de début" source="petr:startingTime" options={{ format: 'HH:mm', ampm: false }} />
          <TimeInput label="Heure de fin" source="petr:endingTime" options={{ format: 'HH:mm', ampm: false }} />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="petr:openingTimesDay4">
        <SimpleFormIterator className={classes.OpeningTimesForm}>
          <TimeInput label="Heure de début" source="petr:startingTime" options={{ format: 'HH:mm', ampm: false }} />
          <TimeInput label="Heure de fin" source="petr:endingTime" options={{ format: 'HH:mm', ampm: false }} />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="petr:openingTimesDay5">
        <SimpleFormIterator className={classes.OpeningTimesForm}>
          <TimeInput label="Heure de début" source="petr:startingTime" options={{ format: 'HH:mm', ampm: false }} />
          <TimeInput label="Heure de fin" source="petr:endingTime" options={{ format: 'HH:mm', ampm: false }} />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="petr:openingTimesDay6">
        <SimpleFormIterator className={classes.OpeningTimesForm}>
          <TimeInput label="Heure de début" source="petr:startingTime" options={{ format: 'HH:mm', ampm: false }} />
          <TimeInput label="Heure de fin" source="petr:endingTime" options={{ format: 'HH:mm', ampm: false }} />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="petr:openingTimesDay7">
        <SimpleFormIterator className={classes.OpeningTimesForm}>
          <TimeInput label="Heure de début" source="petr:startingTime" options={{ format: 'HH:mm', ampm: false }} />
          <TimeInput label="Heure de fin" source="petr:endingTime" options={{ format: 'HH:mm', ampm: false }} />
        </SimpleFormIterator>
      </ArrayInput>
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
      <ReificationArrayInput source="petr:equipmentOffers" reificationClass="pair:Resource">
        <TextInput source="pair:Label" fullWidth />
      </ReificationArrayInput>
    </>
  )
}

export default OrganizationForm;
