import React from 'react';
import Header from 'src/components/Header';

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header {...args}>{args.text}</Header>;

export const PrimaryUnselectedHeader = Template.bind({});
PrimaryUnselectedHeader.args = {
  className: 'primaryUnselectedHeader',
  text: 'INTEGRATIONS',
};

export const PrimarySelectedHeader = Template.bind({});
PrimarySelectedHeader.args = {
  className: 'primarySelectedHeader',
  text: 'INTEGRATION DETAILS - 00007374',
};

export const SecondaryHeader = Template.bind({});
SecondaryHeader.args = {
  className: 'secondaryHeader',
  text: '1. Search for User',
};

PrimaryUnselectedHeader.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A792',
    },
  },
};

PrimarySelectedHeader.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A794',
    },
  },
};

SecondaryHeader.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A873',
    },
  },
};
