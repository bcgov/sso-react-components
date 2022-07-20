import React, { Children } from 'react';
import styled from 'styled-components';

const colorMap: any = {
  primary: '#0139ff',
  dark: '#000',
};

const radiusMap: any = {
  none: '',
  sm: '5px',
  md: '10px',
  lg: '20px',
};

const widthMap: any = {
  sm: '1px',
  md: '2px',
  lg: '3px',
};

const StyledBorder = styled.div<{ color?: string; round?: string; borderWidth?: string }>`
  border-style: solid;
  width: 100%;
  height: auto;
  padding: 5px;
  ${(props) => `
        border-color: ${colorMap[props.color || 'primary']};
        border-width: ${widthMap[props.borderWidth || 'lg']};
        border-radius: ${radiusMap[props.round || 'md']};
    `}
`;

interface Props {
  color?: string;
  round?: string;
  borderWidth?: string;
  children?: React.ReactNode;
}

const Border = ({ color, round, borderWidth, children }: Props) => {
  return (
    <StyledBorder color={color} round={round} borderWidth={borderWidth}>
      {children}
    </StyledBorder>
  );
};

export default Border;
