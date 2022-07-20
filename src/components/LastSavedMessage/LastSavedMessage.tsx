import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { RotatingLines as SpinnerRotatingLines } from 'react-loader-spinner';

const Icon = styled.span`
  width: 30px;
`;

const SaveContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;

const StyledP = styled.p`
  margin-left: 10px;
  margin-top: unset;
`;

interface Props {
  saving: boolean;
  content?: string;
  variant?: string;
}

function LastSavedMessage({ saving, content = '', variant = 'info' }: Props) {
  if (!saving && !content) return null;

  const icon = variant === 'error' ? faExclamationTriangle : faCheck;
  return (
    <>
      <SaveContainer>
        <Icon>
          {saving ? (
            <SpinnerRotatingLines width="20" visible />
          ) : (
            <FontAwesomeIcon style={{ color: '#006fc4' }} icon={icon} />
          )}
        </Icon>
        <StyledP>{content}</StyledP>
      </SaveContainer>
    </>
  );
}

export default LastSavedMessage;
