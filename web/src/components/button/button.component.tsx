import React, { ComponentPropsWithoutRef } from 'react';
import './button.styles.scss';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  isGoogleSignIn: boolean;
}

const Button = ({ children, isGoogleSignIn = false, type, ...otherProps }: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      type={type === 'submit' ? 'submit' : 'button'}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
