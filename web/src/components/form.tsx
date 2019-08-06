import React, { useState } from 'react';
import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';
import Button from './button';
import { cardContent } from './card';
import { encode } from '../utils/helpers';

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

const Fieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;

  > * + * {
    margin-top: ${spacing(3)};

    ${breakpoint('medium')} {
      margin-top: ${spacing(6)};
    }
  }

  ${Button} {
    margin-top: ${spacing(6)};
  }
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
