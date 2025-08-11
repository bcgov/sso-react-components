import React from 'react';
import NumberedContents from '../src/components/NumberedContents';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'NumberedContents',
  component: NumberedContents,
  argTypes: {
    variant: { control: { type: 'select', options: ['primary', 'secondary'] } },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <>
    <NumberedContents {...args}>
      <span>
        Are you accountable for this project: <strong>Yes</strong>
      </span>
      <br />
      <span>
        Client Type: <strong>Confidential</strong>
      </span>
      <br />
      <span>
        Project Name: <strong>zz</strong>
      </span>
      <br />
      <span>
        Default email address: <strong>lada.miaous@gov.bc.ca</strong>
      </span>
      <br />
      <span>
        Additional Emails: <strong></strong>
      </span>
      <br />
      <span>
        Identity Providers Required: <strong></strong>
      </span>
      <br />
      <span>
        Dev Redirect URIs: <strong>nnn</strong>
      </span>
    </NumberedContents>
    <NumberedContents
      {...args}
      number={2}
      title="Your environments(s) will be provisioned by the SSO Pathfinder team"
      showLine={false}
    >
      <span>Once you submit the request, access will be provided in 20 minutes or fewer</span>
    </NumberedContents>
  </>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  number: 1,
  title: 'First Section',
  variant: 'primary',
  circleDiameter: '40px',
  circleMargin: '5px',
};

Primary.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=1635%3A2305',
    },
  },
};
