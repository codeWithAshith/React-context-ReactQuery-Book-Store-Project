import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import { useCartContext } from "../context/cartContext";

const NavbarComponent = () => {
  const { user, logOut } = useUserContext();
  const { cart } = useCartContext();
  const navigate = useNavigate();

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cart.filter((c) => user.id === c.usersId).length);
  }, [cart]);

  return (
    <nav className="bg-red-100 w-screen h-14 flex justify-between items-center">
      <Link to={"/"} className="text-red-900 font-semibold px-4">
        Book Store
      </Link>
      <div className="flex gap-4 mx-4 text-red-900">
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to={"/cart"}
        >
          Cart {cartCount === 0 ? "" : cartCount}
        </NavLink>
        <NavLink
          to={"/login"}
          // onClick={() => {
          //   // logOut();
          //   console.log("cl")
          //   navigate("/login");
          // }}
        >
          Log out
        </NavLink>
      </div>
    </nav>
  );
};

export default NavbarComponent;
