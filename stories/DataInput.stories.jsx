import React from 'react';
import DataInput from 'src/components/DataInput';

export default {
  title: 'DataInput',
  component: DataInput,
};

const Template = (args) => <DataInput {...args} type="text" maxLength="100" placeholder={'Enter search criteria'} />;

export const SearchBar = Template.bind({});
SearchBar.args = {
  className: 'searchBar',
};

SearchBar.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A891',
    },
  },
};
