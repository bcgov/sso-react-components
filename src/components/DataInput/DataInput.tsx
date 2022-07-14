import styled from 'styled-components';
import { applyTheme, StyleConfig } from '@button-inc/component-library/Input';
import Input from '@button-inc/bcgov-theme/Input';
import Dropdown from '@button-inc/bcgov-theme/Dropdown';
import Select from 'react-select';

export const styles = {
  variant: {
    dropDown: Dropdown`
            `,
    searchBar: Input`
            `,
    multiSelect: Select`
            `,
  },
};

const config: StyleConfig = {
  defaultProps: {
    variant: 'dropDown',
  },
  staticProps: [],
};

const DataInput = applyTheme(styles, config);

export default DataInput;
