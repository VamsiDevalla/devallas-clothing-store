import CollectionItem from "../collection-item/collection-item.component";
import "./preview-collection.styles.scss";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="collection-title">{title.toUpperCase()}</h1>
      <div className="preview-section">
        {items
          .filter((_, idx) => idx < 4)
          .map(({ id, name, price, imageUrl }) => (
            <CollectionItem
              key={id}
              name={name}
              price={price}
              imageUrl={imageUrl}
            />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
