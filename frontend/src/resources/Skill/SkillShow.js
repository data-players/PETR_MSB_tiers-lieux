import React from 'react';
import Show from '../../layout/show/Show.js';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import SkillTitle from './SkillTitle.js';
import { GridList, ChipList } from '@semapps/list-components';
import { ReferenceArrayField } from '@semapps/field-components';
import { TextField } from 'react-admin';

const isIframe = window !== window.top;

const AdShow = props => (
  <>
     {isIframe ? null : <BreadcrumbsItem to='/Skill'>Compétences</BreadcrumbsItem> }
     <Show title={<SkillTitle />} {...props}>
        <ReferenceArrayField reference="Person" source="pair:offeredBy" sort={{ field: 'type', order: 'ASC' }}>
          <GridList xs={6} sm={4} md={4} linkType="show">
            <TextField source="pair:label" />
          </GridList>
        </ReferenceArrayField>
    </Show>
  </>
);

export default AdShow;
