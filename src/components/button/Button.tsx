import React from 'react';
import './button.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  label?: string;
}

export const Button = (props: ButtonProps) => {

  let variant = props.variant || 'primary';

  const buttonClass = ['button', 'h-5', 'w-14', 'outline-none', 'text-center', 'rounded', 'tracking-wide', `${variant}`].join(' ')
  const labelClass = ['label', 'text-center'].join(' ');

  return (
    <button className={buttonClass} {...props}>
      <span className={labelClass}>{props.label}</span>
    </button>
  )
}

// Button.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };
