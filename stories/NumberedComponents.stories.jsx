import React from 'react';
import NumberedContents from 'src/components/NumberedContents';

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
      <p>First line</p>
    </NumberedContents>
    <NumberedContents {...args} number={2} title="Second Section">
      <p>Second Line</p>
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
  circleMargin: '10px',
};

Primary.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/proto/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=795%3A2303&scaling=contain&page-id=505%3A1169&starting-point-node-id=802%3A2320&show-proto-sidebar=1',
    },
  },
};
