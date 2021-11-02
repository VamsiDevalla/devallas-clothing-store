import { Component } from "react";
import SHOP_DATA from "./shop.data";
import "./shop.styles.scss";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shopPage">
        <h1>Shop Page </h1>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
