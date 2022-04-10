import React from 'react';
import { Block } from './styles/PageTemplate.styles';

const PageTemplate = ({ children }) => {
  return <Block>{children}</Block>;
};

export default PageTemplate;
