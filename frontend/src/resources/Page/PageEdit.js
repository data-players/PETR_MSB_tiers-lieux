import React from 'react';
import {  SimpleForm, TextInput } from 'react-admin';
import Edit from "../../layout/edit/Edit";
import { MarkdownInput } from '@semapps/markdown-components';
import PageTitle from './PageTitle';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

const isIframe = window !== window.top;

const PageEdit = props => (
  <>
    {isIframe ? null : <BreadcrumbsItem to='/Page'>Page</BreadcrumbsItem> } 
    <Edit title={<PageTitle />} {...props}>
      <SimpleForm redirect="show">
        <TextInput source="pair:label" fullWidth />
        <MarkdownInput multiline source="pair:content" fullWidth />
      </SimpleForm>
    </Edit>
  </>
);

export default PageEdit;
