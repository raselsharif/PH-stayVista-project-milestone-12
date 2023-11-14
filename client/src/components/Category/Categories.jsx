import CategoryCard from "./CategoryCard";
import { categories } from "./CategoryData";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";

const Categories = () => {
  const categoriesData = categories;
  // console.log(categoriesData);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  return (
    <Container>
      <div className="flex justify-start 2xl:justify-center gap-4 overflow-x-auto pb-4">
        {categoriesData.map((item) => (
          <CategoryCard
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          ></CategoryCard>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
