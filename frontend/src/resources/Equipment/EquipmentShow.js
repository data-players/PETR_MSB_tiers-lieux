import React from 'react';
import { useSelector } from 'react-redux';
import { MainList, Show } from '@semapps/archipelago-layout';
import { MarkdownField } from '@semapps/markdown-components';

const EquipmentShow = ({...props}) => {

  const state = useSelector(state => state);
  const isAdminContext = state.customState.isAdminContext;

  return (
    <Show actions={null} {...props}>
      <MainList>
        <MarkdownField source="pair:label" />
      </MainList>
    </Show>
  );
};

export default EquipmentShow;
