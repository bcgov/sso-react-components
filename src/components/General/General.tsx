import { applyTheme, StyleConfig } from '@button-inc/component-library/Button';

export const styles = {
    variant: {
        primaryUnselectedHeader: `
            font-size: 22px;
            font-weight: bold;
            `,
        primarySelectedHeader: `
            font-size: 22px;
            font-weight: bold;
            color: #0139FF;
            `,
        secondaryHeader: `
            font-weight: bold;
            `,
        generalScrollbar: `
            overflow: auto;
            `,
        generalLastSaved: `
            `,
        generalInfoText: `
            font-style: italic;
            font-size: 0.9rem;
            `,
        bottomHalfContainerBorder: `
            border: 3px solid #0139FF;
            border-radius: 10px;
            `,
    },
}

const config: StyleConfig = {
    defaultProps: {
      variant: 'primaryUnselectedHeader',
    },
    staticProps: [],
  };

const General = applyTheme(styles, config);

export default General;
