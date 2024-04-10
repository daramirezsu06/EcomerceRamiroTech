import { CategoryListContainer } from "./CategoryList.styles";
import { categoriesToPreLoad } from "@/utils/preLoadData";
import ItemCategoryList from "../item/ItemCategoryList";

const CategoryList: React.FC =():React.ReactElement=> {
  return (
    <CategoryListContainer>
      {categoriesToPreLoad.map((category, index) => {
        return <ItemCategoryList key={index}>{category.name}</ItemCategoryList>;
      })}
    </CategoryListContainer>
  );
}

export default CategoryList;
