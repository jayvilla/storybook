import React from 'react';
import './RadioGroup.scss';
import { RadioButton } from '../radioButton';

export type RadioGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  layout?: 'column' | 'row';
};

export const RadioGroup = (props: RadioGroupProps) => {
  const [radioValue, setRadioValue] = React.useState<string>('');

  const handleOnRadioChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setRadioValue(e.target.value);
  };

  const radioGroupWrapper = ['radio-group--wrapper', `radio-group--${props.layout}`].join(' ');

  return (
    <div className={radioGroupWrapper} {...props}>
      <RadioButton
        bulletType='diamond'
        checked={radioValue === 'San Francisco'}
        fill='#fc5203'
        onChange={handleOnRadioChange}
        size='lg'
        label='San Francisco'
        labelPosition='right'
        value='San Francisco'
      />
      <RadioButton
        bulletType='circle'
        checked={radioValue === 'Sacramento'}
        fill='#036bfc'
        onChange={handleOnRadioChange}
        size='lg'
        label='Sacramento'
        labelPosition='right'
        value='Sacramento'
      />
      <RadioButton
        bulletType='square'
        checked={radioValue === 'Los Angeles'}
        fill='#333333'
        onChange={handleOnRadioChange}
        size='lg'
        label='Los Angeles'
        labelPosition='right'
        value='Los Angeles'
      />
      <RadioButton
        bulletType='diamond'
        checked={radioValue === 'San Diego'}
        fill='#00d1b2'
        onChange={handleOnRadioChange}
        size='lg'
        label='San Diego'
        labelPosition='right'
        value='San Diego'
      />
    </div>
  );
};
