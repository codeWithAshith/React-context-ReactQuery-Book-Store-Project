import React from "react";

import cover from "../images/book_cover.jpg";
import ButtonComponent from "./utils/Button.component";
import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";
import { BUTTON_TYPE } from "../constants";

const BookItemComponent = ({ book }) => {
  const { cart, setCart } = useCartContext();
  const { user } = useUserContext();

  return (
    <div className="border rounded p-4 bg-slate-50 text-center flex flex-col justify-center">
      <img className="w-60 mx-auto" src={cover} alt="Logo" />
      <p className="font-semibold my-2">{book.bookName}</p>
      <p className="">Author: {book.author}</p>
      <p className="mb-3">Price: ₹{book.price}</p>
      {cart.find((c) => c.booksId === book.id) ? (
        <ButtonComponent label={"Book Added"} variant={BUTTON_TYPE.FILLED} />
      ) : (
        <ButtonComponent
          label={"Add to Cart"}
          clickHandler={() => {
            if (cart.find((c) => c.booksId === book.id)) {
              console.log("Book already exists");
            } else
              setCart([
                ...cart,
                {
                  booksId: book.id,
                  usersId: user.id,
                  ...book,
                },
              ]);
          }}
        />
      )}
    </div>
  );
};

export default BookItemComponent;
