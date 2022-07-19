import React from 'react';
import Tabs, { Tab } from 'src/components/Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

const Template = (args) => (
  <>
    <Tabs {...args} onChange tabBarGutter={20}>
      <Tab tab="Tab 1" key="1" />
      <Tab tab="Tab 2" key="2" />
      <Tab tab="Tab 3" key="3" />
    </Tabs>
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
