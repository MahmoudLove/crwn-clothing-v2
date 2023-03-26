import './category-item.style.scss';

function CategoryItem({ category }) {
  const { name, imageUrl } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{name}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
