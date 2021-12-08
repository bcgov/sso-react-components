import { applyTheme, StyleConfig } from '@button-inc/component-library/Button';

export const styles = {
  shared: {
    button: `
      cursor: pointer;
      display: inline-block;
      min-height: 1em;
      outline: none;
      border-width: 0;
      vertical-align: baseline;
      border-radius: 0.5em;
      padding: 0.75em 1.5em;
      font-weight: bold;

      &:hover {
        opacity: 0.8;
      }
    `,
  },
  size: {
    small: {
      button: `
        font-size: 0.8rem;
      `,
    },
    medium: {
      button: `
        font-size: 1rem;
      `,
    },
    large: {
      button: `
        font-size: 1.2rem;
      `,
    },
  },
  variant: {
    callout: {
      button: `
        background-color: #fdb913;
      `,
    },
    primary: {
      button: `
        background-color: #1a4dff;
        color: #e8edff;
      `,
    },
    secondary: {
      button: `
        border: 3px solid #1a4dff;
        color: #1a4dff;
        background-color: #ffffff;

      `,
    },
  },
  disabled: `
  `,
};

const config: StyleConfig = {
  defaultProps: {
    variant: 'primary',
    size: 'medium',
  },
  breakProps: ['disabled'],
  staticProps: [],
};

const Button = applyTheme(styles, config);

export default Button;
