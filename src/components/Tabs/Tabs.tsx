import styled from 'styled-components';
import Tabs, { TabPane } from 'rc-tabs';

const StyledTabs = styled(Tabs)`
  .rc-tabs-tab {
    display: inline-block;
    height: 30px;
    font-size: 18px;
  }

  .rc-tabs-nav-list {
    border-bottom: 1px solid #dee2e6;
  }

  .rc-tabs-nav-list:hover {
    cursor: pointer;
  }

  .rc-tabs-tab-active {
    border-bottom: 3px solid orange;
    font-weight: 600;
  }

  .rc-tabs-nav-operations {
    display: none;
  }
`;

export default StyledTabs;
export const Tab = TabPane;
