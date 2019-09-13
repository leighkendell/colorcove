import React, { useState } from 'react';
import styled from 'styled-components';
import { cardContent } from './card';
import { encode } from '../utils/helpers';
import Fieldset from './fieldset';

interface Props {
  formName: string;
  onSuccess: () => void;
  onError: (error: any) => void;
}

const StyledForm = styled.form`
  max-width: 560px;
  margin: 0 auto;
  background-color: ${props => props.theme.colorLightGrey};
  ${cardContent};
`;

const Form: React.FC<Props> = ({ children, formName, onSuccess, onError }) => {
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formEl = event.currentTarget;

    if (formEl) {
      const formData = new FormData(formEl);
      setDisabled(true);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(Object.fromEntries(formData)),
      })
        .then(() => {
          setDisabled(false);
          formEl.reset();
          onSuccess();
        })
        .catch(error => {
          setDisabled(false);
          onError(error);
        });
    }
  };

  return (
    <StyledForm
      name={formName}
      method="post"
      action="/thanks/"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formName} />
      <Fieldset disabled={disabled}>{children}</Fieldset>
    </StyledForm>
  );
};

export default Form;
