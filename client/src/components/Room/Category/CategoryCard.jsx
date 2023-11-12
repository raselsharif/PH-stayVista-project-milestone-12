import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";
const CategoryCard = ({ label, icon: Icon }) => {
  const [params, setParams] = useSearchParams();
  //   console.log(params);
  const navigate = useNavigate();
  const handleSelected = () => {
    let currentQuery = {};
    // console.log(currentQuery);
    if (params) {
      currentQuery = qs.parse(params.toString());
      const updatedQuery = { ...currentQuery, category: label };
      const url = qs.stringifyUrl({
        url: "/",
        query: updatedQuery,
      });
      navigate(url);
      //   console.log(url);
    }
  };
  params.get("category");
  return (
    <div
      onClick={handleSelected}
      className="p-2 flex justify-center items-center flex-col border-b cursor-pointer"
    >
      <Icon size={32} />
      <p>{label}</p>
    </div>
  );
};

export default CategoryCard;
