import React from 'react';
import Tabs from 'src/components/Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

const Template = (args) => (
  <Tabs {...args}>
    <Tab title="Tab 1"/>
    <Tab title="Tab 2"/>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'Default',
  content: 'Default Tabs',
};

Default.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A774',
    },
  },
};