import React from 'react';
import Button from '../src/components/Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args}>{args.text}</Button>;

export const Callout = Template.bind({});
Callout.args = {
  variant: 'callout',
  text: '+ Request SSO Integration',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  text: 'Send Invitation',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  text: 'Cancel',
};

export const BcSecondary = Template.bind({});
BcSecondary.args = {
  variant: 'bcSecondary',
  text: 'Cancel',
};

export const BcPrimary = Template.bind({});
BcPrimary.args = {
  variant: 'bcPrimary',
  text: 'Cancel',
};

export const PlainText = Template.bind({});
PlainText.args = {
  variant: 'plainText',
  text: 'Cancel',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  text: 'Cancel',
};

Callout.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=1458%3A2248',
    },
  },
};

Primary.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=1458%3A2227',
    },
  },
};

Secondary.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=1458%3A2230',
    },
  },
};
