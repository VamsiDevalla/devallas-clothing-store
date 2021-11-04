import React, { Component, PropsWithChildren } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

type MenuItemModel = {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: 'large' | 'sm' | 'xl' | 'md';
};

class Directory extends Component<Record<string, unknown>, { menuItems: MenuItemModel[] }> {
  constructor(properties: PropsWithChildren<Record<string, unknown>>) {
    super(properties);
    this.state = {
      menuItems: [],
    };
  }

  render(): JSX.Element {
    const { menuItems } = this.state;
    return (
      <div className='directory-menu'>
        {menuItems.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
