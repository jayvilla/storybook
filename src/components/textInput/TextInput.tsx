import React from 'react';
import './TextInput.css';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: 'default' | 'outlined' | 'filled';
  label?: 'string';
}

export const TextInput = (props: TextInputProps) => {
  const [inputValue, setInputValue] = React.useState(props.value || '');

  React.useEffect(() => {
    if (props.value) {
      setInputValue(props.value);
    }
  }, [props.value])

  const handleOnChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e);
    setInputValue(e.target.value);
  }

  let variant = props.variant || 'default';

  const Label = props.label && <label className='textInputLabel'>{props.label}</label>

  const inputClass = ['textInput', 'text-xs', 'h-2', 'w-18', 'p-3', 'outline-none', `${variant}`].join(' ');

  return (
    <div>
        <input className={inputClass} {...props} />
        {Label}
    </div>
  )
}