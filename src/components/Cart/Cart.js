import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const showcart = useSelector((state) => state.ui.showCart);
  const cartItems = useSelector((state) => state.cart.items);
  return (
    showcart && (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <CartItem
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
              key={item.id}
            />
          ))}
        </ul>
      </Card>
    )
  );
};

export default Cart;