import { CartContainer, Image } from "./Cart.styles";

const Cart: React.FC = (): React.ReactElement => {
  return (
    <CartContainer>
      <Image
        src="https://cdn-icons-png.flaticon.com/512/1170/1170627.png"
        alt="Cart"
      />
    </CartContainer>
  );
};

export default Cart;
