import { ItemNav } from "../item_nav";

const itemsNavBar = ["Home", "About", "Products", "Contact"];

export const NavBarLeft: React.FC = (): React.ReactElement => {
    return (
      <nav>
        <ul className="md:flex content-around gap-3 hidden ">
          {itemsNavBar.map((item) => (
            <ItemNav key={item}>{item}</ItemNav>
          ))}
        </ul>
      </nav>
    );
};
