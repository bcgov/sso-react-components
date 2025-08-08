import React from 'react';
import Accordion from '../src/components/Accordion';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Accordion',
  component: Accordion,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <Accordion {...args}>
    <Accordion.Panel title={args.title}>
      <p>
        The short answer is that <b>confidential clients</b> can keep a secret while <b>public clients</b> do not
        require a secret.
      </p>
      <h3>Confidential Client</h3>
      <ul>
        <li>Server-side applications (e.g., .Net, Java, PHP)</li>
      </ul>
      <h3>Public Client</h3>
      <ul>
        <li>Javascript applications (e.g., SPA: single page application, Hybrid Mobile apps)</li>
        <li>Native Mobile apps, Embedded devices, and Internet of Things (e.g., Apple TV)</li>
        <li>Secured by PKCE (Proof Key for Code Exchange); a secret on the fly</li>
      </ul>
    </Accordion.Panel>
    <Accordion.Panel title="Q. How do I allow dynamic redirect URIs for my integration?">
      <p>
        Yes, you can start with <b>http://localhost</b> and change your redirect URIs.
      </p>
      <p>
        Before going to production, please make sure that your production environment's redirect URIs are properly set
        to your live application's domain.
      </p>
    </Accordion.Panel>
  </Accordion>
);

export const Open = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Open.args = {
  title: 'Q. What is the difference between confidential and public client types?',
  open: true,
};

Open.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=1635%3A2827',
    },
  },
};

export const Closed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Closed.args = {
  title: 'Q. What is the difference between confidential and public client types?',
};

Closed.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=1635%3A2331',
    },
  },
};
