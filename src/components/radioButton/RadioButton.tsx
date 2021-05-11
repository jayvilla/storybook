import React from 'react';
import './RadioButton.scss';

export type RadioButtonProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  bulletType: 'circle' | 'diamond' | 'square';
  fill?: string;
  label?: string;
  labelPosition?: 'top' | 'right' | 'bottom' | 'left';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'outlined';
};

export const RadioButton = (props: RadioButtonProps) => {
  const labelEl = React.useRef();
  const checkEl = React.useRef();

  const [checked, setChecked] = React.useState(props.checked || false);

  React.useEffect(() => {
    if (props.checked) {
      setChecked(props.checked);
    }
  }, [props.checked]);

  React.useEffect(() => {
    const label = labelEl.current || undefined;
    const check = checkEl.current || undefined;

    if (labelEl.current) {
      label.style.setProperty('--fill', props.fill);
    }

    if (labelEl.current) {
      check.style.setProperty('--fill', props.fill);
    }
  }, [checked]);

  const handleOnRadioChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props?.onChange(e);
    }
    setChecked((prevState) => !prevState);
  };

  const radioWrapperClass = ['radio--wrapper', 'relative', 'w-max'].join(' ');
  const radioClass = ['radio', 'hidden'].join(' ');
  const labelWrapperClass = ['radio-label', 'flex', 'items-center', 'cursor-pointer'].join(
    ' ',
  );
  const checkClass = [
    `radio--${props.bulletType}`,
    'check',
    'w-4',
    'h-4',
    'inline-block',
    'mr-1',
    'border',
    'border-grey',
  ].join(' ');
  const labelClass = ['label', `label--${props.size}`, `label--${props.labelPosition}`].join(
    ' ',
  );

  return (
    <div className={radioWrapperClass}>
      <input
        id={props.label.toLowerCase().replace(' ', '-')}
        type='radio'
        className={radioClass}
        checked={checked}
        onChange={handleOnRadioChange}
        {...props}
        size={undefined}
      />
      <label
        ref={labelEl}
        htmlFor={props.label.toLowerCase().replace(' ', '-')}
        className={labelWrapperClass}
      >
        <span ref={checkEl} className={checkClass}></span>
        <span className={labelClass}>{props.label}</span>
      </label>
    </div>
  );
};

RadioButton.defaultProps = {
  bulletType: 'circle',
  fill: '#fc5203',
  label: 'Button',
  labelPosition: 'top',
  size: 'sm',
  variant: 'default',
};
