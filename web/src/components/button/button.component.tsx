import React, { ComponentPropsWithoutRef } from 'react';
import './button.styles.scss';

interface ButtonProperties extends ComponentPropsWithoutRef<'button'> {
  isGoogleSignIn: boolean;
}

const Button = ({ children, isGoogleSignIn = false, type, ...otherProperties }: ButtonProperties): JSX.Element => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      type={type === 'submit' ? 'submit' : 'button'}
      {...otherProperties}
    >
      {children}
    </button>
  );
};

export default Button;
