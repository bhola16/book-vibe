// src/components/shared/ReadButton.tsx

"use client";

import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/types/Type";
import { useContext, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: BookType }) => {
 
 
  const { readBooks, setReadBooks } = useContext(BooksContext) as {
    readBooks: BookType[];
    setReadBooks: Dispatch<SetStateAction<BookType[]>>;
  };

  const handleReadBook = () => {
    // console.log("read button .......", book);

    setReadBooks([...readBooks, book]);
    toast.success(`you have read ${book.bookName}`);
  };

  return (
    <button
      className="flex-1 rounded-xl bg-[#2f241f] px-6 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#b85c38] hover:shadow-xl"
      onClick={() => handleReadBook()}
    >
      ♡ Read
    </button>
  );
};

export default ReadButton;
