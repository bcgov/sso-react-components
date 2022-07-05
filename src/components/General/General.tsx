import { applyTheme, StyleConfig } from '@button-inc/component-library/Button';

export const styles = {
    variant: {
        primaryUnselectedHeader: `
            font-size: 21px;
            padding-bottom: 5px;
            font-weight: bold;
            `,
        primarySelectedHeader: `
            font-size: 21px;
            padding-bottom: 10px;
            font-weight: bold;
            color: #4950fa;
            `,
        secondaryHeader: `
                font-weight: bold;
                margin-bottom: 2px;
            `,
        generalScrollbar: `
            height: 100%;
            overflow: auto;
            `,
        generalLastSaved: `
            
            `,
        generalInfoText: `
            font-style: italic;
            font-size: 0.9rem;
            margin-bottom: 1px;
            `,
        bottomHalfContainerBorder: `
            border: 3px solid #4950fa;
            border-radius: 10px;
            padding: 5px;
            padding-top: 20px;
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