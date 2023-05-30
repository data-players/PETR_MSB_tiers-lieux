import React from 'react';
import Show from '../../layout/show/Show.js';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import MarkdownField from '../../commons/fields/MarkdownField.js';
import PageTitle from './PageTitle.js';


const isIframe = window !== window.top;

const PageShow = props => (
  <>
     {isIframe ? null : <BreadcrumbsItem to='/Page'>Page</BreadcrumbsItem> }
     <Show title={<PageTitle />} {...props}>
        <MarkdownField source="pair:description"/>
    </Show>
  </>
);

export default PageShow;
