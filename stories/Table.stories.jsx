import React from 'react';
import Table from 'src/components/Table';

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'mini'],
      },
    },
  },
};

const defaultData = [
  {
    requestId: '00000001',
    projectName: 'Education',
    status: 'Submitted',
    serviceType: 'Gold',
  },
  {
    requestId: '00000002',
    projectName: 'Healthcare',
    status: 'Completed',
    serviceType: 'Gold',
  },
  {
    requestId: '00000003',
    projectName: 'Technology',
    status: 'Completed',
    serviceType: 'Gold',
  },
  {
    requestId: '00000004',
    projectName: 'Finance',
    status: 'Draft',
    serviceType: 'Gold',
  },
  {
    requestId: '00000005',
    projectName: 'Construction',
    status: 'Completed',
    serviceType: 'Gold',
  },
  {
    requestId: '00000006',
    projectName: 'Education',
    status: 'Draft',
    serviceType: 'Gold',
  },
  {
    requestId: '00000007',
    projectName: 'Construction',
    status: 'Submitted',
    serviceType: 'Gold',
  },
  {
    requestId: '00000008',
    projectName: 'Education',
    status: 'Completed',
    serviceType: 'Gold',
  },
  {
    requestId: '00000009',
    projectName: 'Technology',
    status: 'Draft',
    serviceType: 'Gold',
  },
  {
    requestId: '000000010',
    projectName: 'Healthcare',
    status: 'Completed',
    serviceType: 'Gold',
  },
  {
    requestId: '000000011',
    projectName: 'Finance',
    status: 'Draft',
    serviceType: 'Gold',
  },
];

const defaultColumns = [
  {
    header: 'Request ID',
    accessorKey: 'requestId',
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    header: 'Project Name',
    accessorKey: 'projectName',
    enableColumnFilter: false,
  },
  {
    header: 'Status',
    accessorKey: 'status',
    enableColumnFilter: true,
    enableSorting: false,
    filterFn: (row, columnId, value) => {
      if (value.length === 0) return true;
      return value.includes(row.getValue(columnId));
    },
    meta: {
      filterOptions: [
        { value: 'Submitted', label: 'Submitted' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Draft', label: 'Draft' },
      ],
      filterLabel: 'Status',
      filterPlaceholder: 'Select Status',
      multiSelect: true,
    },
  },
  {
    header: 'Service Type',
    accessorKey: 'serviceType',
    enableColumnFilter: false,
  },
];

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'Default',
  readOnly: false,
  columns: defaultColumns,
  data: defaultData,
  enablePagination: true,
  enableGlobalSearch: true,
  globalSearchStyle: { height: '25px' },
  globalSearchPlaceholder: 'Search all columns...',
};

export const Empty = Template.bind({});
Empty.args = {
  variant: 'Default',
  readOnly: false,
  columns: defaultColumns,
  data: [],
  enablePagination: false,
  enableGlobalSearch: true,
  globalSearchStyle: { height: '25px' },
  globalSearchPlaceholder: 'Search all columns...',
};

Default.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5569%3A322',
    },
  },
};
