import React from 'react';

import { DatePicker, DatePickerProps } from '../components/datePicker';

export default {
  title: 'Form/DatePicker',
  component: DatePicker,
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

const Template = (args: DatePickerProps) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  variant: 'default',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  variant: 'filled',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  variant: 'outlined',
};

export const LabelTop = Template.bind({});
LabelTop.args = {
  size: 'sm',
  variant: 'default',
  label: 'Select date:',
  labelPosition: 'top',
};

export const LabelRight = Template.bind({});
LabelRight.args = {
  size: 'sm',
  variant: 'default',
  label: 'Select date:',
  labelPosition: 'right',
};

export const LabelBottom = Template.bind({});
LabelBottom.args = {
  size: 'sm',
  variant: 'default',
  label: 'Select date:',
  labelPosition: 'bottom',
};

export const LabelLeft = Template.bind({});
LabelLeft.args = {
  size: 'sm',
  variant: 'default',
  label: 'Select date:',
  labelPosition: 'left',
};
