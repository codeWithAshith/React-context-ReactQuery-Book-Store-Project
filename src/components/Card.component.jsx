import React from "react";
import ButtonComponent from "./utils/Button.component";
import { BUTTON_TYPE } from "../constants";
import { useCartContext } from "../context/cartContext";

const CardComponent = ({ book }) => {
  const { cart, setCart } = useCartContext();
  return (
    <tr class="bg-white border-b">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {book.bookName}
      </th>
      <td class="px-6 font-medium text-gray-900 py-4">{book.author}</td>
      <td class="px-6 font-medium text-gray-900 py-4">₹ {book.price}</td>
      <td>
        <ButtonComponent
          label={"Remove"}
          variant={BUTTON_TYPE.FILLED}
          clickHandler={() => {
            setCart(cart.filter((c) => c.booksId !== book.id));
          }}
        />
      </td>
    </tr>
  );
};

export default CardComponent;
