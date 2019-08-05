import React, { useState } from 'react';
import Form from './form';
import TextField from './text-field';
import Input from './input';
import Button from './button';
import Message from './message';

const ContactForm: React.FC = () => {
  const [messageVisible, setMessageVisible] = useState(false);

  const handleSuccess = () => {
    if (messageVisible) {
      setMessageVisible(false);
    }
    setMessageVisible(true);
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  return (
    <Form formName="Contact" onError={handleError} onSuccess={handleSuccess}>
      <TextField label="Your name">
        <Input id="name" type="text" required />
      </TextField>
      <TextField label="Your email">
        <Input id="email" type="email" required />
      </TextField>
      <Button>Submit</Button>
      <Message isVisible={messageVisible}>
        We have received your message and we will be in touch soon.
      </Message>
    </Form>
  );
};

export default ContactForm;
