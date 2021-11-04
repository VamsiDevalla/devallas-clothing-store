import React, { Component, PropsWithChildren } from 'react';
import SHOP_DATA, { Collection } from '../../shop.data';
import './shop.styles.scss';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class Shop extends Component<Record<string, unknown>, { collections: Collection }> {
  constructor(properties: PropsWithChildren<Record<string, unknown>>) {
    super(properties);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render(): JSX.Element {
    const { collections } = this.state;
    return (
      <div className='shopPage'>
        <h1>Shop Page </h1>
        {collections.map(({ id, ...otherCollectionProperties }) => (
          <PreviewCollection key={id} {...otherCollectionProperties} />
        ))}
      </div>
    );
  }
}

export default Shop;
