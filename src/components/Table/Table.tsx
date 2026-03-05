import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  Row,
  PaginationState,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnFiltersState,
  ColumnDef,
  VisibilityState,
} from '@tanstack/react-table';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp, faSort } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';

export const TABLE_BACKGROUND_COLOR = '#ededed';
export const TABLE_ROW_ACTIVE_COLOR = '#4950FA';
export const TABLE_ROW_HOVER_COLOR = '#fdb913';
export const TABLE_ROW_HEIGHT = 40;
export const TABLE_ROW_HEIGHT_MINI = 40;
export const TABLE_ROW_SPACING = 5;
export const TABLE_ROW_BORDER_RADIUS = 6;

const StyledTable = styled.table<{ variant?: string; readOnly?: boolean }>`
  width: 100%;
  -webkit-box-shadow: none;
  background-color: ${TABLE_BACKGROUND_COLOR};
  padding: 0 0.6em;
  box-shadow: none;
  text-align: left;
  border-collapse: separate;
  border-spacing: 0 ${TABLE_ROW_SPACING}px;
  color: black;
  margin-bottom: 0.5em;

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

  & th,
  & td {
    border: none;
    padding: 0;
    overflow: hidden;
  }
`;

const approvalOptions: { value: null | boolean; label: string }[] = [
  { value: null, label: 'Submitted' },
  { value: true, label: 'Completed' },
  { value: false, label: 'Draft' },
];

export interface Option {
  value: string | string[];
  label: string;
}

export interface TableFilter {
  key?: string;
  value?: string | Option[];
  multiselect?: boolean;
  onChange?: Function;
  options: Option[];
  label?: string;
  defaultValue?: Option | Option[];
}

export interface Column {
  header: string;
  accessorKey: string;
  enableSorting?: boolean;
  enableFiltering?: boolean;
  meta?: {
    filterLabel?: string;
    filterOptions?: Option[];
    multiSelect?: boolean;
    filterPlaceholder?: string;
    defaultValue?: Option | Option[];
  };
  cell?: (props: { value: any; row: Row<unknown> }) => React.ReactNode;
  footer?: React.ReactNode;
}

export interface TableProps<T extends object> {
  variant?: string;
  readOnly?: boolean;
  columns: ColumnDef<T, any>[];
  hiddenColumns?: string[];
  data: T[];
  onRowSelect?: Function;
  defaultPageSize?: number;
  enableGlobalSearch?: boolean;
  globalSearchPlaceholder?: string;
  globalSearchStyle?: React.CSSProperties;
  enablePagination?: boolean;
  pageSizeOptions?: number[];
  noDataFoundText?: string;
}

const Table = <T extends object>({
  variant = 'default',
  columns = [],
  hiddenColumns = [],
  data = [],
  readOnly = false,
  onRowSelect = (rowData: T) => {},
  defaultPageSize = 5,
  enableGlobalSearch = true,
  globalSearchPlaceholder = 'Search all columns...',
  globalSearchStyle = {},
  enablePagination = true,
  pageSizeOptions = [5, 10, 20, 30, 40, 50],
  noDataFoundText = 'No data found',
}: TableProps<T>) => {
  const [selectedRow, setSelectedRow] = useState<Row<T>>();
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: defaultPageSize,
  });
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [filterState, setFilterState] = useState<any>({});

  const initialVisibility: VisibilityState = useMemo(() => {
    const visibility: VisibilityState = {};

    columns.forEach((col: any) => {
      const key = col.accessorKey;
      if (key) {
        visibility[key] = !hiddenColumns.includes(key);
      }
    });

    return visibility;
  }, [columns, hiddenColumns]);

  const [columnVisibility, setColumnVisibility] = React.useState(initialVisibility);

  const table = useReactTable({
    data,
    columns,
    enableColumnFilters: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    manualPagination: !enablePagination,
    filterFns: {},
    state: {
      pagination,
      globalFilter,
      columnFilters,
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
  });

  const onRowClick = (row: Row<unknown>) => {
    if (!readOnly) {
      setSelectedRow(row as Row<T>);
      onRowSelect(row.original);
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          gap: '0.5em',
          padding: '0.5em 0',
          flexWrap: 'wrap',
        }}
      >
        {enableGlobalSearch && (
          <div style={{ width: '250px' }}>
            <SearchBar
              value={globalFilter ?? ''}
              onChange={(e: any) => setGlobalFilter(String(e.target.value))}
              placeholder={globalSearchPlaceholder}
              style={globalSearchStyle}
            />
          </div>
        )}

        {table.getHeaderGroups().map((headerGroup) =>
          headerGroup.headers.map(
            (header) =>
              header.column.getCanFilter() && (
                <div key={header.id} style={{ width: '250px' }}>
                  <label style={{ fontWeight: 'bold' }}>
                    {String((header.column.columnDef?.meta as any)?.filterLabel + ':')}
                  </label>
                  <Select
                    value={filterState[header.id]}
                    onChange={(selected) => {
                      setFilterState({
                        [header.id]: selected,
                      });
                      const newFilter = (header.column.columnDef?.meta as any)?.multiSelect
                        ? Array.from(selected.values()).map((selection: any) => selection.value)
                        : selected?.value ?? '';

                      header.column?.setFilterValue(newFilter.toString());
                    }}
                    options={(header.column.columnDef?.meta as any)?.filterOptions || []}
                    isMulti={(header.column.columnDef?.meta as any)?.multiSelect || false}
                    placeholder={(header.column.columnDef?.meta as any)?.filterPlaceholder || 'Select...'}
                    isClearable={true}
                    defaultValue={(header.column.columnDef?.meta as any)?.defaultValue || null}
                  />
                </div>
              ),
          ),
        )}
      </div>

      <StyledTable variant={variant} readOnly={readOnly}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  <div
                    {...{
                      className: header.column.getCanSort() ? 'sortable' : '',
                      onClick: () => header.column.toggleSorting(),
                    }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getCanSort() &&
                      ({
                        asc: <FontAwesomeIcon icon={faSortDown} />,
                        desc: <FontAwesomeIcon icon={faSortUp} />,
                      }[header.column.getIsSorted() as string] ?? <FontAwesomeIcon icon={faSort} />)}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length === 0 ? (
            <tr key="no-data">
              <td style={{ textAlign: 'center' }} colSpan={columns.length}>
                {noDataFoundText}
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                onClick={() => {
                  onRowClick(row);
                }}
                className={row.id === selectedRow?.id ? 'active' : ''}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </StyledTable>
      {enablePagination && (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '0.5em' }}>
            <Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              Prev
            </Button>
            <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              Next
            </Button>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Select
              defaultValue={{
                label: `${table.getState().pagination.pageSize} per page`,
                value: table.getState().pagination.pageSize,
              }}
              options={pageSizeOptions.map((value) => ({ value, label: `${value} per page` }))}
              onChange={(e: any) => {
                table.setPageSize(Number(e.value));
              }}
              menuPosition="fixed"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
