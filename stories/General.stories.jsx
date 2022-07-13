import React from 'react';
import General from 'src/components/General';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default {
    title: 'General',
    component: General,
  };

const generalTemplate = (args) => <General {...args}>{args.text}</General>;

const scrollbarTemplate = (args) => (
  <General {...args} style={{height: '130px', width: '250px'}}>
    <p>some content here</p>
    <p>some content here</p>
    <p>some content here</p>
    <p>some content here</p>
    <p>some content here</p>
  </General>
)

const lastSavedTemplate = (args) => (
  <General {...args} style={{border: '1px black solid'}}>
    <FontAwesomeIcon style={{ color: '#006fc4', marginRight: '10px' }} icon={faCheck} />
    {args.text}
  </General>
)

const containerTemplate = (args) => (
  <General {...args} style={{height: '200px', width: '300px'}} />
)

export const primaryUnselectedHeader = generalTemplate.bind({});
primaryUnselectedHeader.args = {
  variant: 'primaryUnselectedHeader',
  text: 'INTEGRATIONS',
  borderStyle: 'none',
};

export const primarySelectedHeader = generalTemplate.bind({});
primarySelectedHeader.args = {
  variant: 'primarySelectedHeader',
  text: 'INTEGRATION DETAILS - 00007374',
};

export const secondaryHeader = generalTemplate.bind({});
secondaryHeader.args = {
  variant: 'secondaryHeader',
  text: '1. Search for User',
};

export const generalScrollbar = scrollbarTemplate.bind({});
generalScrollbar.args = {
  variant: 'generalScrollbar',
  content: 'Default Scrollbar',
};

export const generalLastSaved = lastSavedTemplate.bind({});
generalLastSaved.args = {
  variant: 'generalLastSaved',
  text: 'Last saved at 5/9/2022, 8:44:49 AM',
};

export const generalInfoText = generalTemplate.bind({});
generalInfoText.args = {
  variant: 'generalInfoText',
  text: '* If you did not find the user you were looking for, you can try searching for the user in our IDIR Lookup tool.',
};

export const bottomHalfContainerBorder = containerTemplate.bind({});
bottomHalfContainerBorder.args = {
  variant: 'bottomHalfContainerBorder',
  text: 'this is for the bottom-half-container-border',
};

primaryUnselectedHeader.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A792',
    },
  },
};

primarySelectedHeader.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A794',
    },
  },
};

secondaryHeader.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A873',
    },
  },
};

generalScrollbar.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A914',
    },
  },
};
