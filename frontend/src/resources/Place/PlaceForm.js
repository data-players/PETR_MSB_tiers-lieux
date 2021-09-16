import React from 'react';
import { SimpleForm, ImageInput, TextInput, useGetIdentity, email, required } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/semantic-data-provider';
import { extractContext, LocationInput } from '@semapps/geo-components';
import { ThemesInput, TypeInput, SkillsInput, TypesInput } from '../../pair';

const PlaceForm = ({ mode, ...rest }) => {
  const { identity } = useGetIdentity();
  return (
    <SimpleForm
      initialValues={mode === 'create' ? { 'cdlt:proposedBy': identity?.id } : undefined}
      {...rest}
      redirect="/MyPlaces"
    >
      <TextInput source="pair:label" fullWidth validate={[required()]} />
      <LocationInput
        mapboxConfig={{
          access_token: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
          types: ['place', 'address'],
          country: ['fr', 'be', 'ch'],
        }}
        source="pair:hasPostalAddress"
        parse={(value) => ({
          type: 'pair:PostalAddress',
          'pair:label': value.place_name,
          'pair:addressLocality': value.place_type[0] === 'place' ? value.text : extractContext(value.context, 'place'),
          'pair:addressStreet': value.place_type[0] === 'address' ? [value.address, value.text].join(' ') : undefined,
          'pair:addressZipCode': extractContext(value.context, 'postcode'),
          'pair:addressCountry': extractContext(value.context, 'country'),
          'pair:longitude': value.center[0],
          'pair:latitude': value.center[1],
        })}
        optionText={(resource) => resource['pair:label']}
        validate={[required()]}
        fullWidth
      />
    </SimpleForm>
  );
};

export default PlaceForm;
