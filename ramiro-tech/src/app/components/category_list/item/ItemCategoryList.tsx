import { Item } from "./ItemCategoryList.styles";

function ItemCategoryList({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <Item>{children}</Item>;
}

export default ItemCategoryList;
