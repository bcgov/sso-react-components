import styled from 'styled-components';
import { Tab } from 'react-tabs';

export const SUBTITLE_FONT_SIZE = '18px';

const Tabs = styled(Tab)`
.nav-link {
  color: black !important;
  height: 30px !important;
  font-size: ${SUBTITLE_FONT_SIZE} !important;
  padding-top: 0; !important;
  border-top: unset !important;
  border-left: unset !important;
  border-right: unset !important;
}
.nav-link.active {
  background-color: unset !important;
  border-bottom: 3px solid orange;
  font-weight: 600;
}
`;

export default Tabs; 