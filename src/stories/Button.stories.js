import React from 'react';

import { Button } from '../components/button';

export default {
  title: 'Example/Button',
  component: Button
}

export const Primary = () => <Button variant='primary' label='primary' />
export const Secondary = () => <Button variant='secondary' label='secondary' />
export const Success = () => <Button variant='success' label='success' />
export const Danger = () => <Button variant='danger' label='danger' />
