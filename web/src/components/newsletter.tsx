import React, { useRef, useState } from 'react';
import Section from './section';
import Wrapper from './wrapper';
import TextField from './text-field';
import Input from './input';
import Button from './button';
import styled from 'styled-components';
import jsonp from 'jsonp';
import Message from './message';
import Heading from './heading';
import Text from './text';
import Fieldset from './fieldset';
import { spacing } from '../utils/style-helpers';

const HiddenField = styled.div`
  position: absolute;
  left: -5000px;
`;

const StyledSection = styled(Section)`
  max-width: 100%;
  margin-bottom: 0;
  padding: var(--spacing) 0;
  background-color: ${props => props.theme.colorBlack};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ${Wrapper} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${spacing(2)} ${spacing(8)};
    max-width: 1200px;
    margin: 0 auto;

    > * {
      color: ${props => props.theme.colorWhite};
    }
  }

  ${Button} {
    margin-top: ${spacing(4)};
  }
`;

const Newsletter: React.FC = () => {
  const formEl = useRef<HTMLFormElement>(null);
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResponseMessage('');
    setDisabled(true);

    if (formEl.current) {
      const formData: {} = Object.fromEntries(new FormData(formEl.current));
      const url = `${formEl.current.action}&${new URLSearchParams(
        formData
      ).toString()}`;

      jsonp(url, { param: 'c', timeout: 3500 }, (err, data) => {
        if (err) {
          setResponseMessage(err.message);
        }
        if (data) {
          setResponseMessage(data.msg);
        }
        setDisabled(false);
        formEl.current && formEl.current.reset();
      });
    }
  };

  return (
    <StyledSection disableFadeIn>
      <Wrapper>
        <div>
          <Heading type="h2">Stay up to date</Heading>
          <Text>
            Subscribe to the colorcove newsletter and get the Kodak Ektachrome
            E100 LUT for free.
          </Text>
        </div>
        <form
          action="https://colorcove.us3.list-manage.com/subscribe/post-json?u=272443d3265ce66ca31808674&id=ece7b64a25"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          onSubmit={handleSubmit}
          ref={formEl}
        >
          <Fieldset>
            <TextField label="Your email address">
              <Input id="mce-EMAIL" name="EMAIL" type="email" required />
            </TextField>
            <HiddenField aria-hidden="true">
              <input
                type="text"
                name="b_272443d3265ce66ca31808674_ece7b64a25"
                tabIndex={-1}
                defaultValue=""
              />
            </HiddenField>
            <Button disabled={disabled}>Subscribe now</Button>
          </Fieldset>
          <Message isVisible={!!responseMessage}>
            <div dangerouslySetInnerHTML={{ __html: responseMessage }} />
          </Message>
        </form>
      </Wrapper>
    </StyledSection>
  );
};

export default Newsletter;
