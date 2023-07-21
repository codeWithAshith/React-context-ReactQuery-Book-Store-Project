import React, { useEffect, useState } from "react";
import ButtonComponent from "./utils/Button.component";
import { useCartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

const CheckoutComponent = () => {
  const { cart, setCart } = useCartContext();
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => {
        acc = acc + curr.price;
        return acc;
      }, 0)
    );
  }, [cart]);

  return (
    <div className="my-4 flex w-full justify-between">
      <p>Total: ₹ {total}</p>
      <ButtonComponent
        label={"Checkout"}
        clickHandler={() => {
          setCart([]);
          navigate("/");
        }}
      />
    </div>
  );
};

export default CheckoutComponent;
