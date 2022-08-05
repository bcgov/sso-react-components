import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  width: 100%;
`;

const Icon = styled.i`
  position: relative;
  right: 1.5em;
  color: grey;
  top: 0.18em;
`;

const Input = styled.input`
  border: 2px solid #606060;
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  padding-left: 0.6em;
  padding-right: 2.3em;
  border-radius: 0.25em;
`;

function SearchBar(props: any) {
  return (
    <Wrapper>
      <Input type="text" maxLength={100} {...props} />
      <Icon>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Icon>
    </Wrapper>
  );
}

export default SearchBar;
