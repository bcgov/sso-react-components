import SearchBar from 'src/components/SearchBar';

export default {
  title: 'SearchBar',
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const DefaultSearchBar = Template.bind({});
DefaultSearchBar.args = {
  placeholder: 'Enter search criteria',
  maxLength: 10,
};

DefaultSearchBar.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A891',
    },
  },
};
