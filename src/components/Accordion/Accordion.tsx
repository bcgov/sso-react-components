import React, { useEffect, useState } from 'react';
import { createHashHistory } from 'history';
import styled from 'styled-components';
import flatten from 'lodash.flatten';
import kebabCase from 'lodash.kebabcase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { LANDING_HEADER_FONT, LINK_BLUE } from '../../styles/theme';

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

function AccordionPanel({ title, hash, allOpen, setAllOpen, children }: any) {
  const id = kebabCase(title);
  const [open, setOpen] = useState(allOpen);

  const handleClick = () => {
    setOpen(!open);
    setAllOpen(null);
  };

  useEffect(() => {
    if (allOpen === null) return;
    setOpen(allOpen);
  }, [allOpen]);

  useEffect(() => {
    if (hash === id) setOpen(true);
  }, [hash]);

  return (
    <Container>
      <Header onClick={handleClick}>
        <span id={id}>{title}</span>
        <FontAwesomeIcon icon={open ? faAngleUp : faAngleDown} size="2x"></FontAwesomeIcon>
      </Header>
      <SmoothTransition open={open}>{children}</SmoothTransition>
    </Container>
  );
}

interface Props {
  children: any;
  open?: boolean;
}

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${LINK_BLUE};
  & span {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Divider = styled.span`
  border-right: 1px solid black;
  height: 1em;
  margin: auto 0.5em;
`;

function Accordion({ children, open = false }: Props) {
  const [hash, setHash] = useState<string>('');
  const [allOpen, setAllOpen] = useState<boolean>(open);

  useEffect(() => {
    let history = createHashHistory();
    let unlisten = history.listen(({ action, location }) => {
      setHash(location.pathname);
    });

    return () => unlisten();
  }, []);

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
        ? flatten(children).map((child: any) => React.cloneElement(child, { hash, allOpen, setAllOpen }))
        : React.cloneElement(children, { allOpen, setAllOpen })}
    </>
  );
}

Accordion.Panel = AccordionPanel;
export default Accordion;
