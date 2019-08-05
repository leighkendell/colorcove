import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../components/input';
import TextField from '../components/text-field';
import Form from '../components/form';
import Button from '../components/button';

storiesOf('Forms', module)
  .add('Input', () => <Input />)
  .add('Text Field', () => (
    <TextField label="Your name">
      <Input id="name" type="text" />
    </TextField>
  ))
  .add('Form', () => (
    <Form
      formName="sb-contact"
      onError={error => console.error(error)}
      onSuccess={() => console.log('success')}
    >
      <TextField label="Your name">
        <Input id="name" type="text" />
      </TextField>
      <TextField label="Your email">
        <Input id="email" type="email" />
      </TextField>
      <Button>Submit</Button>
    </Form>
  ));
