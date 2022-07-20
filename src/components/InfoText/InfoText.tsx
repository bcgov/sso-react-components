import React from 'react';
import styled from 'styled-components';

const StyledInfoText = styled.div<{ italic?: boolean }>`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  ${(props) => `
    font-style: ${props.italic ? 'italic' : 'normal'};
  `}
`;

interface Props {
  italic?: boolean;
  children: React.ReactNode;
}

const InfoText = ({ italic, children }: Props) => {
  return <StyledInfoText italic={italic}>{children}</StyledInfoText>;
};

export default InfoText;
