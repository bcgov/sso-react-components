import React from 'react';
import styled from 'styled-components';

const colorMap: any = {
    primary: '#0139ff',
    dark: '#000',
};

const StyledBorder = styled.div<{ color?: string, radius?: string, borderWidth?: string, width?: string, height?: string }>`
border-style: solid;  
${(props) => `
    border-color: ${colorMap[props.color || 'dark']};
    border-width: ${props.borderWidth || '1px'};
    border-radius: ${props.radius || '0px'};
    width: ${props.width || '300px'};
    height: ${props.height || '150px'};
  `}
`;

interface Props {
    color?: string;
    radius?: string;
    borderWidth?: string;
    width?: string;
    height?: string;
}

const Border = ({ color, radius, borderWidth, width, height }: Props) => {
    return (
    <StyledBorder color={color} radius={radius} borderWidth={borderWidth} width={width} height={height} />
      );
};

export default Border;