import styled from 'styled-components';
import Tabs, { TabPane } from "rc-tabs";

export const SUBTITLE_FONT_SIZE = '18px';

const Tab = styled(Tabs)`
.rc-tabs-tab {
  display: inline-block;
  color: black !important;
  height: 20px !important;
  font-size: ${SUBTITLE_FONT_SIZE} !important;
  padding-top: 0; !important;
  border-top: unset !important;
  border-left: unset !important;
  border-right: unset !important;
  }
  
.rc-tabs-tab:active {
  background-color: unset !important;
  border-bottom: 3px solid orange;
  font-weight: 600;
}
`;

export default Tab; 