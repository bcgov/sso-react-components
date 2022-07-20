import React from 'react';
import LastSavedMessage from 'src/components/LastSavedMessage';

export default {
  title: 'LastSavedMessage',
  component: LastSavedMessage,
};

const Template = (args) => <LastSavedMessage {...args} />;

export const LastSavedTemplate = Template.bind({});
LastSavedTemplate.args = {
  saving: false,
  content: 'Last saved at 5/9/2022, 8:44:49 AM',
};

LastSavedTemplate.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A920',
    },
  },
};