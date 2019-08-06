import React, { useState } from 'react';
import Form from './form';
import TextField from './text-field';
import Input from './input';
import Button from './button';
import Message from './message';
import Textarea from './textarea';

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
        <Input id="name" name="name" type="text" required />
      </TextField>
      <TextField label="Your email address">
        <Input id="email" name="email" type="email" required />
      </TextField>
      <TextField label="Your message">
        <Textarea id="message" name="message" required />
      </TextField>
      <Button>Send enquiry</Button>
      <Message isVisible={messageVisible}>
        We have received your message and we will be in touch soon.
      </Message>
    </Form>
  );
};

export default ContactForm;
