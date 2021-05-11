import React from 'react';
import './DropDown.scss';

export type DropDownProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> & {
  label?: string;
  labelPosition?: 'top' | 'right' | 'bottom' | 'left';
  options?: string[];
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
};

export const DropDown = (props: DropDownProps) => {
  const [dropDownValue, setDropDownValue] = React.useState(props.options[0] || '');

  // Listen for props

  const handleChange = (e?: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChange(e);
    setDropDownValue(e.target.value);
  };

  const renderOptions = (options) => {
    return options.map((option, i) => (
      <option value={option} key={i}>
        {option}
      </option>
    ));
  };

  const dropDownClass = [
    'drop-down',
    `drop-down--${props.size}`,
    `drop-down--${props.variant}`,
    'text-center',
  ].join(' ');
  const labelClass = ['label', `label--${props.labelPosition}`].join(' ');
  const label = props.label && <span className={labelClass}>{props.label}</span>;
  const dropdownWrapperClass = ['drop-down--wrapper', 'relative', 'w-max'].join(' ');

  if (!props.options) return null;

  return (
    <div className={dropdownWrapperClass}>
      <label>
        <select className={dropDownClass} value={dropDownValue} {...props} size={undefined}>
          {props.options && renderOptions(props.options)}
        </select>
        {label}
      </label>
    </div>
  );
};

DropDown.defaultProps = {
  label: null,
  labelPosition: 'top',
  options: null,
  variant: 'default',
  size: 'sm',
};
