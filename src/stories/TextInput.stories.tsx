import React from 'react';

import { TextInput, TextInputProps } from '../components/textInput';

export default {
  title: 'Form/TextInput',
  component: TextInput,
};

const Template = (args: TextInputProps) => <TextInput {...args} />;

// export const Default = () => <TextInput variant='default' label='Default' required />
// export const Outlined = () => <TextInput variant='outlined' label='Outlined' required />
// export const Filled = () => <TextInput variant='filled' label='Filled' required />
// export const NoLabel = () => <TextInput variant='default' placeholder='Type text here..' />

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  label: 'Default',
  required: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  label: 'Outlined',
  required: true,
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
  label: 'Filled',
  required: true,
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  variant: 'filled',
  placeholder: 'Type text here...',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'filled',
  label: 'Small',
  required: true,
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'outlined',
  label: 'Medium',
  required: true,
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'default',
  label: 'Large',
  required: true,
  size: 'lg',
};
