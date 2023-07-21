import React from "react";
import CardComponent from "./Card.component";

const CartTable = ({ books }) => {
  return (
    <div class="relative overflow-x-auto border border-red-100">
      <table class="w-full text-sm text-left text-red-500">
        <thead class="text-xs text-red-700 uppercase bg-red-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              Book name
            </th>
            <th scope="col" class="px-6 py-3">
              Author
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return <CardComponent key={book.id} book={book} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
