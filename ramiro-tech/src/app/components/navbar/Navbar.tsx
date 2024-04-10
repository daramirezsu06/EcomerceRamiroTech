import { NavBarContainer } from "./NavBar.styles";
import ItemText from "@/app/components/item";



const itemsNavBar:string[] = ["Home", "About", "Products", "Contact"];


const NavBar:React.FC=():React.ReactElement=> {
    return (
      
    <NavBarContainer>
      {itemsNavBar.map((item, index) => {
        return <ItemText key={index}>{item}</ItemText>;
      })}
    </NavBarContainer>
  );
}

export default NavBar;
