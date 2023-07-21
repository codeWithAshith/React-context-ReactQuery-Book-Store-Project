import React, { useEffect, useState } from "react";
import BookItemComponent from "../components/BookItem.component";
import { useQuery } from "react-query";
import apiModules from "../api/service";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const { isLoading, data, isError } = useQuery({
    queryKey: ["books"],
    queryFn: apiModules.fetchBooks,
  });

  useEffect(() => {
    if (data) {
      setBooks(data.data);
    }
  }, [data]);

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Erroe</p>;

  return (
    <div className="m-4">
      <p className="font-medium text-2xl mb-4 text-center">Book Store</p>
      <div className="grid grid-cols-4 gap-4">
        {books.map((book) => {
          return <BookItemComponent key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
