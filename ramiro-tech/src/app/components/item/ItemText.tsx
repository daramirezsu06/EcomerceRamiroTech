import { Item } from "./ItemText.styles";

const ItemText = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return <Item>{children}</Item>;
};

export default ItemText;
