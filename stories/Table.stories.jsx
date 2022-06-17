import React from 'react';
import Table from 'src/components/Table';

export default {
  title: 'Table',
  component: Table,
};

const Template = (args) => (
  <Table {...args}>
    <thead>
      <tr>
        <th>Request ID</th>
        <th>Project Name</th>
        <th>Status</th>
        <th>Service Type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>00001234</td>
        <td>Education</td>
        <td>Completed</td>
        <td>Gold</td>
      </tr>
      <tr className="active">
        <td>00005678</td>
        <td>Health</td>
        <td>Draft</td>
        <td>Silver</td>
      </tr>
    </tbody>
  </Table>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'Default',
  content: 'Default Table',
};

Default.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5569%3A322',
    },
  },
};
