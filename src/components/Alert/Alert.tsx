import { applyTheme, StyleConfig } from '@button-inc/component-library/Notification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export const styles = {
  shared: {
    container: `
      position: relative;
      min-height: 1em;
      margin: 1em 0em;
      line-height: 1.5em;
      color: rgba(0, 0, 0, 0.87);
      padding: 0.5em 3em;
      font-weight: bold;
      border: 1px solid #434a44;

    `,
    close: `
      cursor: pointer !important;
      text-decoration: none;
      position: absolute;
      right: 1em;
      font-weight: normal;
      color: #434a44;
    `,
  },
  variant: {
    danger: {
      container: `
        background-color: #EAC2C1;
      `,
    },
    info: {
      container: `
        background-color: #FFDD81;
      `,
    },
    success: {
      container: `
        background-color: #C4D8CF;
      `,
    },
  },
};

const config: StyleConfig = {
  defaultProps: {
    variant: 'success',
  },
  staticProps: [],
};

const DefaultAlert = applyTheme(styles, config);

type Variant = 'danger' | 'success' | 'info';

interface Props {
  variant?: Variant;
  content?: string;
  [key: string]: any;
}

const SuccessIcon = (
  <FontAwesomeIcon
    icon={faCheckCircle}
    size="lg"
    style={{
      color: 'white',
      backgroundColor: '#489458',
      borderRadius: '50%',
      marginRight: '1em',
      border: '1px solid #434a44',
    }}
  ></FontAwesomeIcon>
);

const DangerIcon = (
  <div
    style={{
      backgroundColor: 'white',
      marginRight: '1em',
      borderRadius: '50%',
      height: '1.5em',
      width: '1.5em',
      display: 'inline-block',
      textAlign: 'center',
      border: '1px solid #434a44',
    }}
  >
    <FontAwesomeIcon
      icon={faExclamationTriangle}
      style={{
        color: '#d94532',
        marginBottom: '0.1em',
      }}
      size="sm"
    ></FontAwesomeIcon>
  </div>
);

const InfoIcon = (
  <div
    style={{
      backgroundColor: 'white',
      marginRight: '1em',
      borderRadius: '50%',
      height: '1.5em',
      width: '1.5em',
      display: 'inline-block',
      textAlign: 'center',
      border: '1px solid #434a44',
    }}
  >
    <FontAwesomeIcon
      icon={faInfoCircle}
      style={{
        color: '#000',
        marginBottom: '0.1em',
      }}
      size="sm"
    ></FontAwesomeIcon>
  </div>
);

const Alert = (props: Props) => (
  <DefaultAlert {...props}>
    {props.variant === 'success' ? SuccessIcon : props.variant === 'danger' ? DangerIcon : InfoIcon}
    {props.children}
    {props.content}
    <DefaultAlert.Close>X</DefaultAlert.Close>
  </DefaultAlert>
);

export default Alert;
