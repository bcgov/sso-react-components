import React from 'react';
import styled from 'styled-components';

const sizeMap: any = {
  sm: '1.0rem',
  md: '1.2rem',
  lg: '1.4rem',
};

const colorMap: any = {
  primary: '#0139ff',
  dark: '#000',
};

const StyledHeader = styled.div<{ variant?: string; size?: string }>`
  font-weight: bold;
  ${(props) => `
    color: ${colorMap[props.variant || 'dark']};
    font-size: ${sizeMap[props.size || 'md']};
  `}
`;

interface Props {
  variant?: string;
  size?: string;
  children: React.ReactNode;
}

const Header = ({ variant, size, children }: Props) => {
  return (
    <StyledHeader variant={variant} size={size}>
      {children}
    </StyledHeader>
  );
};
export default Header;
