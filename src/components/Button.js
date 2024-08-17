// src/components/Button.js
import React from 'react';
import clsx from 'clsx';

const Button = ({ children, variant = 'outline', size = 'icon', className, ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md transition-colors focus:outline-none';
  const variants = {
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-muted hover:text-primary',
  };
  const sizes = {
    icon: 'p-2',
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5',
    lg: 'px-6 py-3',
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;   
