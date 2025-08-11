import React from 'react';
import Header from '../src/components/Header';

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header {...args}>{args.text}</Header>;

export const LargeDarkHeader = Template.bind({});
LargeDarkHeader.args = {
  variant: 'dark',
  size: 'lg',
  text: 'INTEGRATIONS',
};

export const LargePrimaryHeader = Template.bind({});
LargePrimaryHeader.args = {
  variant: 'primary',
  size: 'lg',
  text: 'INTEGRATION DETAILS - 00007374',
};

export const SmallDarkHeader = Template.bind({});
SmallDarkHeader.args = {
  variant: 'dark',
  size: 'sm',
  text: '1. Search for User',
};

LargeDarkHeader.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A792',
    },
  },
};

LargePrimaryHeader.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A794',
    },
  },
};

SmallDarkHeader.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A873',
    },
  },
};
