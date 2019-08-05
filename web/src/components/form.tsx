import React, { useRef, useState } from 'react';
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
`;

const Fieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;

  > * + * {
    margin-top: ${spacing(3)};
  }

  ${Button} {
    margin-top: ${spacing(6)};
  }
`;

const Form: React.FC<Props> = ({ children, formName, onSuccess, onError }) => {
  const formEl = useRef<HTMLFormElement>(null);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formEl.current) {
      const formData = new FormData(formEl.current);
      formData.append('form-name', formName);
      setDisabled(true);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData,
      })
        .then(() => {
          setDisabled(false);
          if (formEl.current) {
            formEl.current.reset();
          }
          onSuccess();
        })
        .catch(error => {
          setDisabled(false);
          onError(error);
        });
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit} ref={formEl}>
      <Fieldset disabled={disabled}>{children}</Fieldset>
    </StyledForm>
  );
};

export default Form;
