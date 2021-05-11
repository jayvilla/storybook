import React from 'react';

import { Tooltip2 } from '../components/tooltip2';

export default {
  title: 'UI/Tooltip2',
  component: Tooltip2,
  decorators: [
    (Story) => (
      <div style={{ display: 'block', width: '100vw', height: '100vh', paddingTop: '50px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Tooltip2 {...args} />;

const Child = <div style={{ width: 'max-content', margin: '0 auto' }}>Child Component</div>;

export const Top = Template.bind({});
Top.args = {
  children: Child,
  content: 'Content',
  fill: '#333333',
  position: 'top',
};

export const Right = Template.bind({});
Right.args = {
  children: Child,
  content: 'Content',
  fill: '#00d1b2',
  position: 'right',
};

export const Bottom = Template.bind({});
Bottom.args = {
  children: Child,
  content: 'Content',
  fill: '#fc5203',
  position: 'bottom',
};

export const Left = Template.bind({});
Left.args = {
  children: Child,
  content: 'Content',
  fill: '#036bfc',
  position: 'left',
};
