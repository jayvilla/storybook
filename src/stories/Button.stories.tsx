import React from 'react';

import { Button, ButtonProps } from '../components/button';

export default {
  title: 'Form/Button',
  component: Button,
};

const Template = (args: ButtonProps) => <Button {...args} />;

// export const Primary = () => <Button variant='primary' label='primary' />
// export const Secondary = () => <Button variant='secondary' label='secondary' />
// export const Success = () => <Button variant='success' label='success' />
// export const Danger = () => <Button variant='danger' label='danger' />
// export const Small = () => <Button variant='primary' label='small' size='small' />
// export const Medium = () => <Button variant='secondary' label='medium' size='medium' />
// export const Large = () => <Button variant='success' label='large' size='large' />

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  label: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  label: 'danger',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'primary',
  label: 'small',
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'secondary',
  label: 'medium',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'success',
  label: 'large',
  size: 'lg',
};
