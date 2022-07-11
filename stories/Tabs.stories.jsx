import React from 'react';
import Tab from 'src/components/Tabs';
import Tabs, { TabPane } from "rc-tabs";

export default {
  title: 'Tab',
  component: Tab,
};

function callback(key) {
  console.log(key);
}

//const tabs = "1" | "2" | "3";

const Template = (args) => (
  <Tab {...args} defaultActiveKey="1" onTabClick={callback} style={{display:'inline-block'}}>
    <TabPane tab="Tab 1" key="1"/>
    <TabPane tab="Tab 2" key="2"/>
    <TabPane tab="Tab 3" key="3"/>
  </Tab>
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