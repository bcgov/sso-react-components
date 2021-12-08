import React from 'react';
import Alert from 'src/components/Alert';

export default {
  title: 'Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args}>{args.text}</Alert>;

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  text: 'Notification bar',
  closable: true,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  text: 'Error Message',
};

Success.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=1458%3A2222',
    },
  },
};

Danger.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=1575%3A2173',
    },
  },
};
