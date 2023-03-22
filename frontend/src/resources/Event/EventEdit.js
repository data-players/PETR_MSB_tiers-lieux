import React from 'react';
import {  SimpleForm, TextInput, ArrayInput, SimpleFormIterator, ImageInput } from 'react-admin';
import frLocale from 'date-fns/locale/fr';
import Edit from "../../layout/edit/Edit";
import { DateTimeInput } from '@semapps/date-components';
import { ImageField } from '@semapps/field-components';
import { MarkdownInput } from '@semapps/markdown-components';
// import { UriArrayInput } from '@semapps/semantic-data-provider';
import EventTitle from './EventTitle';
import PairLocationInput from '../../pair/PairLocationInput';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { OrganizationsInput, ThemesCheckBoxInput } from '../../commons/input';

const isIframe = window !== window.top;

const EventEdit = props => (
  <>
    {isIframe ? null : <BreadcrumbsItem to='/Event'>Agenda</BreadcrumbsItem> } 
    <Edit title={<EventTitle/>} {...props}>
      <SimpleForm redirect="show">
        <TextInput source="pair:label" label="Nom" fullWidth />
        <TextInput source="pair:comment" label="Courte description" fullWidth />
        <MarkdownInput multiline source="pair:description"  label="Description" fullWidth />
        <ArrayInput source="pair:homePage" >
          <SimpleFormIterator>
            <TextInput label="" fullWidth />
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="pair:aboutPage" >
          <SimpleFormIterator>
            <TextInput label="" fullWidth />
          </SimpleFormIterator>
        </ArrayInput>
        <PairLocationInput label="Adresse" source="pair:hasLocation" fullWidth />
        <TextInput source="pair:video" label="Video url" fullWidth/>
        <ImageInput source="pair:depictedBy" accept="image/*">
          <ImageField source="src"/>
        </ImageInput>
        <DateTimeInput
            source="pair:startDate"
            options={{
              format: 'dd/MM/yyyy à HH:mm',
              ampm: false
            }}
            providerOptions={{
              locale: frLocale
            }}
            fullWidth
          />
          <DateTimeInput
            source="pair:endDate"
            options={{
              format: 'dd/MM/yyyy à HH:mm',
              ampm: false
            }}
            providerOptions={{
              locale: frLocale
            }}
            fullWidth
          />
          <OrganizationsInput source="pair:deliveredBy" label="Organisation en charge de l'évènement" />
          {/* <ActorsInput source="pair:involvedIn" labe="Personnes participant à l'évènement" /> */}
          <ThemesCheckBoxInput source="pair:hasTopic" label="Thèmes (cocher la ou les thèmes en lien avec l'événement)" />
        {/* 
       
        <UriArrayInput label="Thèmes (cocher la ou les thèmes en lien avec l'événement)" source="pair:hasTopic" reference="Topic" fullWidth>
          <CheckboxGroupInput optionText="pair:label" allowEmpty />
        </UriArrayInput> */}
      </SimpleForm>
    </Edit>
  </>
);

export default EventEdit;
