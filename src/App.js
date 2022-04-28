// Section  19  video 260
// inside component code
// import { Fragment, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Cart from "./components/Cart/Cart";
// import Layout from "./components/Layout/Layout";
// import Products from "./components/Shop/Products";
// import { uiActions } from "./store/ui-slice";
// import Notification from "./components/UI/Notification";

// let isInitial = true;

// function App() {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
//   const notification = useSelector((state) => state.ui.notification);

//   useEffect(() => {
//     const sendCartData = async () => {
//       dispatch(
//         uiActions.showNotification({
//           status: "pending",
//           title: "Sending",
//           message: "Sending cart data to Server",
//         })
//       );
//       const response = await fetch(
//         "https://cart-a1ef2-default-rtdb.firebaseio.com/cart.json",
//         {
//           method: "PUT",
//           body: JSON.stringify(cart),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Sending data to card failed!!");
//       }

//       dispatch(
//         uiActions.showNotification({
//           status: "success",
//           title: "Success!!!",
//           message: "Sending data to card Success!!",
//         })
//       );
//     };

//     if (isInitial) {
//       isInitial = false;
//       return;
//     }

//     sendCartData().catch((error) => {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error!!!",
//           message: "Sending data to card failed!!",
//         })
//       );
//     });
//   }, [cart, dispatch]);

//   return (
//     <Fragment>
//       {notification && (
//         <Notification
//           status={notification.status}
//           title={notification.title}
//           message={notification.message}
//         />
//       )}
//       <Layout>
//         <Cart />
//         <Products />
//       </Layout>
//     </Fragment>
//   );
// }

// export default App;

// action creator
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
