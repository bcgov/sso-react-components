import React from 'react';
import LastSavedMessage from 'src/components/LastSavedMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'LastSavedMessage',
  component: LastSavedMessage,
};

const Template = (args) => (
  <LastSavedMessage {...args} style={{ border: '1px black solid', float: 'left', padding: '2px' }}>
    <FontAwesomeIcon style={{ color: '#006fc4', marginRight: '10px' }} icon={faCheck} />
    {args.text}
  </LastSavedMessage>
);

export const LastSaved = Template.bind({});
LastSaved.args = {
  className: 'lastSavedMessage',
  text: 'Last saved at 5/9/2022, 8:44:49 AM',
};

LastSaved.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A920',
    },
  },
};
