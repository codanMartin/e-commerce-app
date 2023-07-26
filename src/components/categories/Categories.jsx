import CategoryItem from "./category-item/CategoryItem";
import categories from "../../categories.json"
import "./Categories.scss"


const Categories = () => {

  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem  key={id} title={title} imageUrl={imageUrl}/>
      ))}
    </div>
  );
};

export default Categories;