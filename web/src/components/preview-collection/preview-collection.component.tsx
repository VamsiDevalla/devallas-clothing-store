import React, { PropsWithChildren } from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './preview-collection.styles.scss';

type previewCollectionProps = PropsWithChildren<{
  title: string;
  items: Array<{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  }>;
}>;

const PreviewCollection = ({ title, items }: previewCollectionProps): JSX.Element => {
  return (
    <div className='collection-preview'>
      <h1 className='collection-title'>{title.toUpperCase()}</h1>
      <div className='preview-section'>
        {items
          .filter((_, idx) => idx < 4)
          .map(({ id, name, price, imageUrl }) => (
            <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
