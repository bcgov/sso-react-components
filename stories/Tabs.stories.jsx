import React from 'react';
import Tab from 'src/components/Tabs';
import Tabs, { TabPane } from 'rc-tabs';

export default {
  title: 'Tab',
  component: Tab,
};

function callback(key) {
  console.log(key);
}

const Template = (args) => (
  <>
    <Tab {...args} defaultActiveKey="1" onTabClick={callback} tabBarGutter={20}>
      <TabPane tab="Tab 1" key="1">
        tab 1 content
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        tab 2 content
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        tab 3 content
      </TabPane>
    </Tab>
  </>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'Default',
  content: 'Default Tab',
};

Default.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A774',
    },
  },
};
