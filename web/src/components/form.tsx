import React, { useRef } from 'react';
import styled from 'styled-components';
import { spacing } from '../utils/style-helpers';
import Button from './button';
import { cardContent } from './card';

interface Props {
  formName: string;
  onSuccess: () => void;
  onError: (error: any) => void;
}

const StyledForm = styled.form`
  max-width: 560px;
  background-color: ${props => props.theme.colorLightGrey};
  ${cardContent};

  > * + * {
    margin-top: ${spacing(3)};
  }

  ${Button} {
    margin-top: ${spacing(6)};
  }
`;

const Form: React.FC<Props> = ({ children, formName, onSuccess, onError }) => {
  const formEl = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formEl.current) {
      const formData = new FormData(formEl.current);
      formData.append('form-name', formName);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData,
      })
        .then(() => onSuccess())
        .catch(error => onError(error));
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit} ref={formEl}>
      {children}
    </StyledForm>
  );
};

export default Form;
