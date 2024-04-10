"use client";

import { CategoriesContainer } from "./Categories.styles";
import Category from "../category/Category";
import { ICategory } from "@/app/types";

interface CategoriesClientProps {
  categories: ICategory[];
}

function CategoriesClient({ categories }: CategoriesClientProps) {
  return (
    <CategoriesContainer>
      {categories.map((category, index) => (
        <Category key={index} {...category} />
      ))}
    </CategoriesContainer>
  );
}

export default CategoriesClient;
