export const fetchCartData = (cart) => {
  return (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://cart-a1ef2-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not Fetch Cart Data");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData(); 
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
