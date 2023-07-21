import React, { useEffect } from "react";
import Lottie from "lottie-react";
import CartTable from "../components/Cart.table";
import CheckoutComponent from "../components/Checkout.component";
import { useCartContext } from "../context/cartContext";
import empty from "../images/lottie.json";

const CartPage = () => {
  const { cart } = useCartContext();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div>
      <div className="m-4">
        {cart.length === 0 ? (
          <div className="flex w-screen h-screen justify-center mt-28">
            <div className="w-96 h-96">
              <p className="font-semibold text-3xl text-center my-2 text-red-400">
                Cart is empty
              </p>
              <Lottie animationData={empty} loop={true} />
            </div>
          </div>
        ) : (
          <>
            <p className="font-medium text-2xl mb-4 text-center">Cart</p>
            <CartTable books={cart} />
            <CheckoutComponent />
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
