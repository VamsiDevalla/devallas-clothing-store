import React, { PropsWithChildren } from 'react';
import './menu-item.styles.scss';

type MenuProperties = PropsWithChildren<{
  title: string;
  imageUrl: string;
  size: 'large' | 'sm' | 'xl' | 'md' | undefined;
}>;

const MenuItem = ({ title, imageUrl, size }: MenuProperties): JSX.Element => {
  return (
    <div className={`menu-item ${size}`}>
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'> Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
