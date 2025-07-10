import React from 'react';
import Button from '@mui/material/Button';
import './Button.scss';

export interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  ...rest
}) => {
  return (
    <Button
      className={`custom-button-lib ${className || ''}`}
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;