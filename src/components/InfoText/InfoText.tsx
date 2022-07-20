import React from 'react';
import styled from 'styled-components';

const fontStyleMap: any = {
  nmr: 'normal',
  ita: 'italic',
};

const StyledInfoText = styled.div<{ variant?: string }>`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  ${(props) => `
        font-style: ${fontStyleMap[props.variant || 'nmr']};
  `}
`;

interface Props {
  variant?: string;
  size?: string;
  children: React.ReactNode;
}

const InfoText = ({ variant, children }: Props) => {
  return <StyledInfoText variant={variant}>{children}</StyledInfoText>;
};

export default InfoText;
