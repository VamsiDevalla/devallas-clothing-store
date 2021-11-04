import React, { PropsWithChildren } from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './preview-collection.styles.scss';

type PreviewCollectionProperties = PropsWithChildren<{
  title: string;
  items: Array<{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  }>;
}>;

const PreviewCollection = ({ title, items }: PreviewCollectionProperties): JSX.Element => {
  return (
    <div className='collection-preview'>
      <h1 className='collection-title'>{title.toUpperCase()}</h1>
      <div className='preview-section'>
        {items
          .filter((_, index) => index < 4)
          .map(({ id, name, price, imageUrl }) => (
            <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
