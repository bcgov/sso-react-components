import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import flatten from 'lodash.flatten';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { LANDING_HEADER_FONT, SECONDARY_BLUE } from "../../styles/theme";

const ACCORDION_HEADER_COLOR = '#eaeaea';
const ACCORDION_BODY_COLOR = '#f5f5f5';

interface SmoothTransitionProps {
  open?: boolean | null;
}

const SmoothTransition = styled.div<SmoothTransitionProps>`
  transition: max-height 0.4s, padding 0.4s;
  max-height: 300px;
  padding: 10px 20px;
  background-color: ${ACCORDION_BODY_COLOR};
  ${(props) => !props.open && 'max-height: 0px; padding: 0 20px;'};
  overflow-y: hidden;
`;

const Container = styled.div`
  margin: 10px 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px 20px;
  background-color: ${ACCORDION_HEADER_COLOR};
  & span {
    font-size: ${LANDING_HEADER_FONT};
    font-weight: bold;
  }
`;

function Accordionpanel({ title, allOpen, setAllOpen, children }: any) {
  const [open, setOpen] = useState(allOpen);

  const handleClick = () => {
    setOpen(!open);
    setAllOpen(null);
  };

  useEffect(() => {
    if (allOpen === null) return;
    setOpen(allOpen);
  }, [allOpen]);

  return (
    <Container>
      <Header onClick={handleClick}>
        <span>{title}</span>
        <FontAwesomeIcon icon={open ? faAngleUp : faAngleDown} size="2x"></FontAwesomeIcon>
      </Header>
      <SmoothTransition open={open}>{children}</SmoothTransition>
    </Container>
  );
}

interface Props {
  children: any;
}

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${SECONDARY_BLUE};
  & span {
    cursor: pointer;
  }
`;

const Divider = styled.span`
  border-right: 1px solid black;
  margin: 0 9px;
`;

function Accordion({ children }: Props) {
  const [allOpen, setAllOpen] = useState<boolean | null>(null);
  console.log(LANDING_HEADER_FONT)

  const handleClose = () => {
    setAllOpen(false);
  };

  const handleOpen = () => {
    setAllOpen(true);
  };

  return (
    <>
      <ActionsContainer>
        <span onClick={handleOpen}>Expand All</span>
        <Divider />
        <span onClick={handleClose}>Collapse All</span>
      </ActionsContainer>
      {Array.isArray(children)
        ? flatten(children).map((child: any) =>
            React.cloneElement(child, { allOpen, setAllOpen })
          )
        : React.cloneElement(children, { allOpen, setAllOpen })}
    </>
  );
}

Accordion.Panel = Accordionpanel;
export default Accordion;
