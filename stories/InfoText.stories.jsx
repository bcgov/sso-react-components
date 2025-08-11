import React from 'react';
import InfoText from '../src/components/InfoText';

export default {
  title: 'InfoText',
  component: InfoText,
};

const Template = (args) => <InfoText {...args}>{args.text}</InfoText>;

export const ItalicFontInfoText = Template.bind({});
ItalicFontInfoText.args = {
  italic: true,
  text: '* If you did not find the user you were looking for, you can try searching for the user in our IDIR Lookup tool.',
};

ItalicFontInfoText.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A927',
    },
  },
};
