import React from 'react';
import { LargeLabel } from '@semapps/field-components';
import Markdown from 'markdown-to-jsx';

const MarkdownField = ({ source, record }) =>
  record && record[source] ? <Markdown options={{
    createElement(type, props, children) {
      if( props.label ) {
        return (
          <>
            <LargeLabel>{props.label}</LargeLabel>
            {React.createElement(type, props, children)}
          </>
        );
      } else {
        return React.createElement(type, props, children)
      }
    },
    overrides: {
      h1: LargeLabel
    },
  }}>
    {record[source]}
  </Markdown> : null;

MarkdownField.defaultProps = {
  addLabel: true
};

export default MarkdownField;
