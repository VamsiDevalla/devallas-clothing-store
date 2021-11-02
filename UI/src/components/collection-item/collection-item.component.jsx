import "./collection-item.styles.scss";

const CollectionItem = ({ imageUrl, name, price }) => {
  return (
    <div className="collection-item">
      <div
        className="collection-image-item"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-item-footer">
        <span className="collection-item-name">{name}</span>
        <span className="collection-item-price">${price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
