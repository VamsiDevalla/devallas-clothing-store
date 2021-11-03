import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { User } from '@firebase/auth';
import { signOut } from '../../firebase/firebase-utils';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../logo.svg';

type headerProp = PropsWithChildren<{ currentUser: User | null }>;

const Header = ({ currentUser }: headerProp): JSX.Element => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/shop' className='option'>
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className='option'
            role='button'
            tabIndex={0}
            onClick={signOut}
            // onKeyUp={(e: KeyboardEvent<HTMLDivElement>) => 'signOut using keyboard'}
            onKeyUp={() => 'signOut using keyboard'}
          >
            SING OUT
          </div>
        ) : (
          <Link to='/signin'>SIGN IN</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
