import CategoriesClient from "./Categories.client";
import { ICategory } from "@/app/types";

interface CategoriesServerProps {
  categories: ICategory[];
}

async function CategoriesServer({ categories }: CategoriesServerProps) {
  return <CategoriesClient categories={categories} />;
}

export default CategoriesServer;
