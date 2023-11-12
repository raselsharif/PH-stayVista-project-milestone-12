import { categories } from "./CategoryData";

const Categories = () => {
  const categoriesData = categories;
  console.log(categoriesData);

  return <div>{categoriesData.length}</div>;
};

export default Categories;
