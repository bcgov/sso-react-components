import React from 'react';
import styled from 'styled-components';

const Circle = styled.div<{ variant: string; circleDiameter: string; circleMargin: string }>`
  height: ${(props) => props.circleDiameter};
  width: ${(props) => props.circleDiameter};
  min-width: ${(props) => props.circleDiameter};
  text-align: center;
  line-height: ${(props) => props.circleDiameter};
  border-radius: ${(props) => props.circleDiameter};
  background-color: ${(props) => (props.variant === 'primary' ? 'black' : '#777777')};
  color: white;
  font-weight: bold;
  margin: ${(props) => props.circleMargin};
  margin-left: 0;
`;

const Line = styled.div<{ circleDiameter: string }>`
  border-left: 1px solid #bcbcbc;
  margin-left: calc(${(props) => props.circleDiameter} / 2);
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
`;

const TitleContainer = styled.div<{ variant: string }>`
  display: flex;
  align-items: center;
  flex-direction: row;

  & h2 {
    margin: 0;
    color: ${(props) => (props.variant === 'primary' ? 'black' : '#777777')};
    font-size: ${(props) => (props.variant === 'primary' ? '22px' : '18px')};
  }
`;

interface Props {
  number: number;
  title: string;
  showLine?: boolean;
  children: any;
  variant?: string;
  circleDiameter?: string;
  circleMargin?: string;
}

export default function NumberedContents({
  number,
  title,
  children,
  showLine = true,
  circleDiameter = '40px',
  circleMargin = '10px',
  variant = 'primary',
}: Props) {
  return (
    <div>
      <TitleContainer variant={variant}>
        <Circle variant={variant} circleDiameter={circleDiameter} circleMargin={circleMargin}>
          {number}
        </Circle>
        <h2>{title} </h2>
      </TitleContainer>
      <ContentContainer>
        {showLine ? <Line circleDiameter={circleDiameter} /> : <span />}
        <div>{children}</div>
      </ContentContainer>
    </div>
  );
}
