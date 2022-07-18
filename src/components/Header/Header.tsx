import styled from 'styled-components';

const Header = styled.header`
  &.primaryUnselectedHeader {
    font-size: 22px;
    font-weight: bold;
  }
  &.primarySelectedHeader {
    font-size: 22px;
    font-weight: bold;
    color: #0139ff;
  }
  &.secondaryHeader {
    font-weight: bold;
  }
`;
export default Header;
