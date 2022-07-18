import styled from 'styled-components';

export const TABLE_BACKGROUND_COLOR = '#ededed';
export const TABLE_ROW_ACTIVE_COLOR = '#4950FA';
export const TABLE_ROW_HOVER_COLOR = '#fdb913';
export const TABLE_ROW_HEIGHT = 40;
export const TABLE_ROW_HEIGHT_MINI = 40;
export const TABLE_ROW_SPACING = 5;
export const TABLE_ROW_BORDER_RADIUS = 6;

const Table = styled.table<{ variant?: string; readOnly?: boolean }>`
  width: 100%;
  -webkit-box-shadow: none;
  background-color: ${TABLE_BACKGROUND_COLOR};
  padding: 0.1em 0.6em;
  box-shadow: none;
  text-align: left;
  border-collapse: separate;
  border-spacing: 0 ${TABLE_ROW_SPACING}px;
  color: black;

  & thead {
    font-size: 16px;
    & > th {
      min-width: ${(props) => (props.variant === 'mini' ? '30px' : '140px')};
    }
  }

  & tbody {
    font-size: ${(props) => (props.variant === 'mini' ? '14px' : '16px')};
    & > tr {
      height: ${(props) => (props.variant === 'mini' ? `${TABLE_ROW_HEIGHT_MINI}px` : `${TABLE_ROW_HEIGHT}px`)};
      background-color: #fff;

      td:first-child {
        border-top-left-radius: ${TABLE_ROW_BORDER_RADIUS}px;
      }
      td:last-child {
        border-top-right-radius: ${TABLE_ROW_BORDER_RADIUS}px;
      }

      td:first-child {
        border-bottom-left-radius: ${TABLE_ROW_BORDER_RADIUS}px;
      }
      td:last-child {
        border-bottom-right-radius: ${TABLE_ROW_BORDER_RADIUS}px;
      }

      ${(props) =>
        !props.readOnly &&
        `
        &.active {
          background-color: ${TABLE_ROW_ACTIVE_COLOR};
          color: #fff;
          font-weight: bold;
        }
        &:hover {
          background-color: ${TABLE_ROW_HOVER_COLOR};
          color: #fff;
          cursor: pointer;
        }
      `}
    }
  }

  & th:first-child,
  & td:first-child {
    padding-left: 1em;
    text-align: left;
  }

  & th:last-child,
  & td:last-child {
    text-align: right;
    padding-right: 1em;
  }

  & td:last-child {
    padding-right: 2em;
  }

  & th,
  & td {
    border: none;
    padding: 0;
    overflow: hidden;
  }
`;

export default Table;
