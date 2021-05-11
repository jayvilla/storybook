import React from 'react';
import './button.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
};

export const Button = (props: ButtonProps) => {
  const buttonClass = [
    'button',
    `button--${props.size}`,
    `button--${props.variant}`,
    'flex',
    'bg-red-800',
    'justify-center',
    'items-center',
    'uppercase',
    'outline-none',
    'text-center',
    'rounded',
    'tracking-wide',
  ].join(' ');

  const labelClass = [
    'button-label',
    `button-label--${props.size}`,
    'text-center',
    'text-white',
  ].join(' ');

  return (
    <button className={buttonClass} {...props}>
      <span className={labelClass}>{props.label}</span>
    </button>
  );
};

Button.defaultProps = {
  label: 'Button',
  size: 'sm',
  variant: 'primary',
};
