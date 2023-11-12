import CategoryCard from "./CategoryCard";
import { categories } from "./CategoryData";
import Container from "../../Shared/Container";

const Categories = () => {
  const categoriesData = categories;
  // console.log(categoriesData);

  return (
    <Container>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {categoriesData.map((category) => (
          <CategoryCard
            key={category.label}
            label={category.label}
            icon={category.icon}
          ></CategoryCard>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
