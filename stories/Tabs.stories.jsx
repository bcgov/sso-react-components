import React from 'react';
import Tabs from '../src/components/Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

const items = [
  {
    key: '1',
    label: 'Tab 1',
  },
  {
    key: '2',
    label: 'Tab 2',
  },
  {
    key: '3',
    label: 'Tab 3',
  },
];

const Template = (args) => (
  <>
    <Tabs {...args} onChange tabBarGutter={20} style={{ width: '200px' }} items={items} />
  </>
);

export const DefaultTabs = Template.bind({});
DefaultTabs.args = {
  variant: 'Default',
  content: 'Default Tab',
};

DefaultTabs.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A774',
    },
  },
};
