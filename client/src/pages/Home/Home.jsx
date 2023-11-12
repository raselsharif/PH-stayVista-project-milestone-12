import { useSearchParams } from "react-router-dom";
import Categories from "../../components/Room/Category/Categories";
import Room from "../../components/Room/Room";

const Home = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  console.log(category);
  return (
    <div>
      <Categories />
      <Room />
    </div>
  );
};

export default Home;
