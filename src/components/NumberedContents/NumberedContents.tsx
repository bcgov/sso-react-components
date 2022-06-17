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

const Title = styled.h2<{ variant: string }>`
  margin: auto 0;
  color: ${(props) => (props.variant === 'primary' ? 'black' : '#777777')};
  font-size: ${(props) => (props.variant === 'primary' ? '22px' : '18px')};
`;

const Grid = styled.div<{ numberedSectionWidth: string; numberedSectionHeight: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.numberedSectionWidth} 1fr;
  grid-template-rows: ${(props) => props.numberedSectionHeight} 1fr;
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
  circleMargin = '5px',
  variant = 'primary',
}: Props) {
  const circleDiameterInt = Number(circleDiameter.slice(0, -2));
  const circleMarginInt = Number(circleMargin.slice(0, -2));
  const numberedSectionWidth = `${circleDiameterInt + circleMarginInt * 2}px`;
  const numberedSectionHeight = `${circleDiameterInt + circleMarginInt * 2}px`;

  return (
    <Grid numberedSectionWidth={numberedSectionWidth} numberedSectionHeight={numberedSectionHeight}>
      <Circle variant={variant} circleDiameter={circleDiameter} circleMargin={circleMargin}>
        {number}
      </Circle>
      <Title variant={variant}>{title} </Title>
      {showLine ? <Line circleDiameter={circleDiameter} /> : <span />}
      <div>{children}</div>
    </Grid>
  );
}
