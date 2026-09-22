// src/context/BooksContext.tsx

"use client";

import { createContext, ReactNode, useState } from "react";

import { BookType } from "@/types/Type";

type BooksContextType = {
  readBooks: BookType[];
  setReadBooks: React.Dispatch<React.SetStateAction<BookType[]>>;

  wishList: BookType[];
  setWishList: React.Dispatch<React.SetStateAction<BookType[]>>;
};

export const BooksContext = createContext<BooksContextType>({
  readBooks: [],
  setReadBooks: () => {},

  wishList: [],
  setWishList: () => {},
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<BookType[]>([]);

  const [wishList, setWishList] = useState<BookType[]>([]);

  const shareData = {
    readBooks,
    setReadBooks,
    wishList,
    setWishList,
  };

  return (
    <BooksContext.Provider value={shareData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
