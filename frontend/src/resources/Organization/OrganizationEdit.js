import { default as React } from 'react';

import { TextInput } from "ra-ui-materialui";
import {
  ArrayInput,
  FormTab,
  ImageInput,
  SelectInput,
  SimpleFormIterator,
  TabbedForm,
  required,
  Datagrid,
  TextField,
  useEditController,
  ReferenceInput,
  ReferenceManyField,
  DeleteButton,
  AutocompleteArrayInput
} from 'react-admin';

import { MarkdownInput } from '@semapps/markdown-components'
import { ImageField } from '@semapps/field-components';
import { ReferenceArrayInput } from '@semapps/input-components';

import PairLocationInput from '../../pair/PairLocationInput';
import EditContextualButton from '../../components/EditContextualButton';
import CreateContextualButton from '../../components/CreateContextualButton';
import Title from '../_Components/Title';
import Edit from '../../layout/edit/Edit';
    

export const OrganizationEdit = props => {
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useEditController(props);
  return (
    <Edit title={<Title />} {...props} >
      <TabbedForm>
        <FormTab label="Principal">
          <TextInput source="pair:label" label="Titre" fullWidth validate={[required()]} />
          <ReferenceArrayInput source="pair:hasType" reference="OrganizationType" fullWidth >
            <AutocompleteArrayInput optionText="pair:label" />
          </ReferenceArrayInput>
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
            label='Status Juridique'
            reference="LegalStatus"
            validate={[required()]}
          >
            <SelectInput optionText="pair:label" />
          </ReferenceInput>
          <TextInput label="E-mail" source="pair:e-mail" type="email" fullWidth/>
          <TextInput label="Téléphone" source="pair:phone" fullWidth />
          <TextInput label="Site internet" source="pair:webPage" fullWidth />
          <ArrayInput source="petr:socialMedias" >
            <SimpleFormIterator>
              <TextInput label="lien" fullWidth />
            </SimpleFormIterator>
          </ArrayInput>
          <ArrayInput source="petr:hasLabels">
            <SimpleFormIterator>
              <ReferenceInput reference="Label" label='label' >
              <SelectInput optionText="pair:label" />
            </ReferenceInput>
            </SimpleFormIterator>
          </ArrayInput>
          <ArrayInput source="petr:hasNetworks">
            <SimpleFormIterator>
              <ReferenceInput reference="Network" label='réseau' >
              <SelectInput optionText="pair:label"/>
            </ReferenceInput>
            </SimpleFormIterator>
          </ArrayInput>
          <ReferenceArrayInput
            source="petr:hasAudience"
            reference="Audience"
          >
            <SelectInput optionText="pair:label" />
          </ReferenceArrayInput>
          <ReferenceArrayInput label="Thèmes" source="pair:hasTopic" reference="Topic" fullWidth >
            <AutocompleteArrayInput optionText="pair:label" />
          </ReferenceArrayInput>
          <TextInput label="Uid du Picto Access" source='petr:pictoAccessId' fullWidth />
        </FormTab>
        {/* EQUIPMENTS */}
        <FormTab label="Equipements">
          <ReferenceManyField
            addLabel={false}
            reference="Equipment"
            target="petr:equipmentOfferedBy"
          >
            <Datagrid isRowSelectable={()=>(true)}>
              <TextField source="pair:label" />
              <TextField source="pair:description" />
              <EditContextualButton parent={record} resource="Equipment" reverseReference="petr:equipmentOfferedBy"/>
              <DeleteButton redirect={false}/>
            </Datagrid>
          </ReferenceManyField>
          <CreateContextualButton resource="Equipment" parent={record}  reverseReference="petr:equipmentOfferedBy"/>
        </FormTab>
        {/* SPACES */}
        <FormTab label="Espaces">
          <ReferenceManyField
            addLabel={false}
            reference="Space"
            target="petr:spaceOfferedBy"
          >
            <Datagrid isRowSelectable={()=>(true)}>
              <TextField source="pair:label" />
              <TextField source="pair:description" />
              <EditContextualButton parent={record} resource="Space" reverseReference="petr:spaceOfferedBy"/>
              <DeleteButton redirect={false}/>
            </Datagrid>
          </ReferenceManyField>
          <CreateContextualButton resource="Space" parent={record}  reverseReference="petr:spaceOfferedBy"/>
        </FormTab>
        {/* SERVICES */}
        <FormTab label="Services">
          <ReferenceManyField
            addLabel={false}
            reference="Service"
            target="petr:serviceOfferedBy"
          >
            <Datagrid isRowSelectable={()=>(true)}>
              <TextField source="pair:label" />
              <EditContextualButton parent={record} resource="Service" reverseReference="petr:serviceOfferedBy"/>
              <DeleteButton redirect={false}/>
            </Datagrid>
          </ReferenceManyField>
          <CreateContextualButton resource="Service" parent={record}  reverseReference="petr:serviceOfferedBy"/>

        </FormTab>
      </TabbedForm>
    </Edit>
  );
}



export default OrganizationEdit;
