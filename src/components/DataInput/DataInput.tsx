import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  width: 100%;
  display: block;
`;

const Icon = styled.i`
  position: relative;
  right: 30px;
  color: grey;
  top: 2px;
`;

const Input = styled.input`
  width: 50%;
  border: 2px solid gray;
  padding: 0.5em 0.6em;
  border-radius: 0.25em;
`;

function DataInput(text: string) {
  return (
    <Wrapper>
      <Input type="text" maxLength={10} placeholder={text} />
      <Icon>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Icon>
    </Wrapper>
  );
}

export default DataInput;
