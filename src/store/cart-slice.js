import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialCart = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingitem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingitem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingitem.quantity--;
        existingitem.totalPrice = existingitem.totalPrice - existingitem.price;
      }
    },
  },
});

//
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data to Server",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://cart-a1ef2-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending data to card failed!!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!!!",
          message: "Sending data to card Success!!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!!!",
          message: "Sending data to card failed!!",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
