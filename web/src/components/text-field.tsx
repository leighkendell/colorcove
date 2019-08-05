import React from 'react';
import styled from 'styled-components';
import { spacing } from '../utils/style-helpers';
import { TextBase } from './text';

interface Props {
  label: string;
  children: React.ReactElement<HTMLInputElement>;
}

const Wrapper = styled.div``;

const Label = styled.label`
  ${TextBase};
  display: block;
  margin-bottom: ${spacing(1)};
  font-weight: bold;
`;

const TextField: React.FC<Props> = ({ children, label }) => {
  const inputId =
    children && React.Children.only(children) && children.props.id;

  return (
    <Wrapper>
      <Label htmlFor={inputId}>{label}</Label>
      {children}
    </Wrapper>
  );
};

export default TextField;
