import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({
  children,
  handrenClick,
}): React.ReactElement => {
  return (
    <button onClick={handrenClick} className="bg-blue-500 rounded-full block w-44">
      {children}
    </button>
  );
};
export default Button;
