import React from 'react';
import DataInput from 'src/components/DataInput';

export default {
  title: 'DataInput',
  component: DataInput,
};

const dropDownTemplate = (args) => (
  <DataInput {...args} label="Label" size="small">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </DataInput>
);

const searchBarTemplate = (args) => (
  <DataInput {...args} type="text" size="small" maxLength="1000" placeholder={'Enter search criteria'} />
);

const multiSelectTemplate = (args) => (
  <DataInput
    {...args}
    value={'selection 1'}
    isMulti={true}
    placeholder="Select..."
    noOptionsMessage={() => 'No selections'}
  />
);

export const Dropdown = dropDownTemplate.bind({});
Dropdown.args = {
  variant: 'dropDown',
};

export const SearchBar = searchBarTemplate.bind({});
SearchBar.args = {
  variant: 'searchBar',
};

export const multiSelect = multiSelectTemplate.bind({});
multiSelect.args = {
  variant: 'multiSelect',
};
