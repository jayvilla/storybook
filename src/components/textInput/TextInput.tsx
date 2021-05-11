import React from 'react';
import './TextInput.scss';

export type TextInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  error?: boolean;
  errorMessage?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outlined' | 'filled';
};

export const TextInput = (props: TextInputProps) => {
  const [inputValue, setInputValue] = React.useState(props.value || '');
  const [inputError, setInputError] = React.useState<boolean>(props.error || false);
  const [inputErrorMessage, setInputErrorMessage] = React.useState<string>(
    props.errorMessage || '',
  );

  React.useEffect(() => {
    if (props.value) {
      setInputValue(props.value);
    }
  }, [props.value]);

  React.useEffect(() => {
    if (props.error) {
      setInputError(props.error);
    }
    if (props.errorMessage) {
      setInputErrorMessage(props.errorMessage);
    }
  }, [props.error, props.errorMessage]);

  const handleOnChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e);
    setInputValue(e.target.value);
  };

  const inputClass = [
    'text-input',
    `text-input--${props.size}`,
    `text-input--${props.variant}`,
    'block',
    'rounded',
    'outline-none',
  ].join(' ');

  const formControlClass = 'text-input-form-control';
  const labelClass = [`label label--${props.size}`].join(' ');
  const textInputErrorClass = ['text-input-error', 'ml-4'].join(' ');

  const Label = props.label && <span className={labelClass}>{props.label}</span>;

  const { error, errorMessage, size, ...other } = props;

  return (
    <div className={formControlClass}>
      <label>
        <input className={inputClass} {...other} />
        {Label}
      </label>
      {error && errorMessage && <div className={textInputErrorClass}>{errorMessage}</div>}
    </div>
  );
};

TextInput.defaultProps = {
  error: null,
  errorMessage: '',
  label: null,
  size: 'sm',
  variant: 'default',
};
