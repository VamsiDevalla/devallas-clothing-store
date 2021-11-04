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

const menuItemList: MenuItemModel[] = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
    linkUrl: 'shop/hats',
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2,
    linkUrl: 'shop/jackets',
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: 'shop/sneakers',
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens',
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens',
  },
];
class Directory extends Component<Record<string, unknown>, { menuItems: MenuItemModel[] }> {
  constructor(properties: PropsWithChildren<Record<string, unknown>>) {
    super(properties);
    this.state = {
      menuItems: menuItemList,
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
