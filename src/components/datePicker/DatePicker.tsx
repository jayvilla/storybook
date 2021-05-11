import React from 'react';
import './DatePicker.scss';

export type DatePickerProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label?: string;
  labelPosition?: 'top' | 'right' | 'bottom' | 'left';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'outlined';
};

export const DatePicker = (props: DatePickerProps) => {
  const datePickerWrapperClass = ['date-picker--wrapper', 'relative', 'w-max'].join(' ');
  const datePickerClass = [
    'date-picker',
    `date-picker--${props.size}`,
    `date-picker--${props.variant}`,
    'outline-none',
  ].join(' ');
  const labelClass = ['label', `label--${props.labelPosition}`].join(' ');
  const label = props.label && <span className={labelClass}>{props.label}</span>;

  return (
    <div className={datePickerWrapperClass}>
      <label>
        <input className={datePickerClass} type='date' {...props} size={undefined} />
        {label}
      </label>
    </div>
  );
};

DatePicker.defaultProps = {
  label: null,
  labelPosition: 'top',
  size: 'sm',
  variant: 'default',
};
