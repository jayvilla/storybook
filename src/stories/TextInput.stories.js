import React from 'react';

import { TextInput } from '../components/textInput';

export default {
  title: 'Example/TextInput',
  component: TextInput
}

export const Default = () => <TextInput variant='default' label='Default' required />
export const Outlined = () => <TextInput variant='outlined' label='Outlined' required />
export const Filled = () => <TextInput variant='filled' label='Filled' required />
export const NoLabel = () => <TextInput variant='default' placeholder='Type text here..' />