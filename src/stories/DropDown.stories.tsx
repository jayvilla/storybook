import React from 'react';

import { DropDown, DropDownProps } from '../components/dropDown';

export default {
  title: 'Form/DropDown',
  component: DropDown,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '50px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const sampleData = ['Giants', 'Niners', 'Athletics', 'Raider'];

const Template = (args: DropDownProps) => <DropDown {...args} options={sampleData} />;

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

export const Default = Template.bind({});
Default.args = {
  size: 'sm',
  variant: 'default',
};

export const Filled = Template.bind({});
Filled.args = {
  size: 'sm',
  variant: 'filled',
};

export const Outlined = Template.bind({});
Outlined.args = {
  size: 'sm',
  variant: 'outlined',
};

export const LabelTop = Template.bind({});
LabelTop.args = {
  size: 'sm',
  variant: 'default',
  label: 'Select option:',
  labelPosition: 'top',
};

export const LabelRight = Template.bind({});
LabelRight.args = {
  size: 'sm',
  variant: 'default',
  label: 'Select option:',
  labelPosition: 'right',
};

export const LabelBottom = Template.bind({});
LabelBottom.args = {
  size: 'sm',
  variant: 'default',
  label: 'Select option:',
  labelPosition: 'bottom',
};

export const LabelLeft = Template.bind({});
LabelLeft.args = {
  size: 'sm',
  variant: 'default',
  label: 'Select option:',
  labelPosition: 'left',
};
