import React from 'react';
import Border from 'src/components/Border';

export default {
  title: 'Border',
  component: Border,
};

const Template = (args) => <Border {...args} style={{ height: '150px', width: '300px' }} />;

export const BottomHalfContainerBorder = Template.bind({});
BottomHalfContainerBorder.args = {
  className: 'blue-radius',
};

BottomHalfContainerBorder.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A939',
    },
  },
};
