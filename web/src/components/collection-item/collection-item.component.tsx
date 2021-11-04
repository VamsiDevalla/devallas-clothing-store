import React, { PropsWithChildren } from 'react';
import './collection-item.styles.scss';

type CollectionProperties = PropsWithChildren<{
  imageUrl: string;
  name: string;
  price: number;
}>;

const CollectionItem = ({ imageUrl, name, price }: CollectionProperties): JSX.Element => {
  return (
    <div className='collection-item'>
      <div
        className='collection-image-item'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-item-footer'>
        <span className='collection-item-name'>{name}</span>
        <span className='collection-item-price'>${price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
