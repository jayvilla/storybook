import React from 'react';

import { RadioButton, RadioButtonProps } from '../components/radioButton';

export default {
  title: 'Form/RadioButton',
  component: RadioButton,
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

const Template = (args: RadioButtonProps) => <RadioButton {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  label: 'Medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Large',
};

export const Top = Template.bind({});
Top.args = {
  size: 'lg',
  label: 'Top',
  labelPosition: 'top',
};

export const Right = Template.bind({});
Right.args = {
  size: 'lg',
  label: 'Right',
  labelPosition: 'right',
};

export const Left = Template.bind({});
Left.args = {
  size: 'lg',
  label: 'Left',
  labelPosition: 'left',
};

export const Bottom = Template.bind({});
Bottom.args = {
  size: 'lg',
  label: 'Bottom',
  labelPosition: 'bottom',
};

export const Circle = Template.bind({});
Circle.args = {
  bulletType: 'circle',
  fill: '#036bfc',
  size: 'lg',
  label: 'Circle',
  labelPosition: 'top',
};

export const Square = Template.bind({});
Square.args = {
  bulletType: 'square',
  fill: '#fc5203',
  size: 'lg',
  label: 'Square',
  labelPosition: 'top',
};

export const Diamond = Template.bind({});
Diamond.args = {
  bulletType: 'diamond',
  fill: '#00d1b2',
  size: 'lg',
  label: 'Diamond',
  labelPosition: 'top',
};
