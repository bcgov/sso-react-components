import React from 'react';
import Border from 'src/components/Border';

export default {
  title: 'Border',
  component: Border,
};

const Template = (args) => <Border {...args} />;

export const PrimaryRoundBorder = Template.bind({});
PrimaryRoundBorder.args = {
    color: 'primary',
    round: 'md',
    borderWidth: 'lg',
    children: 'Some content here...',
};

PrimaryRoundBorder.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A939',
    },
  },
};