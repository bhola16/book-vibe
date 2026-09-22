// src/components/shared/WishListButton.tsx

"use client";

import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/types/Type";
import { useContext, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: BookType }) => {
  const { wishList, setWishList } = useContext(BooksContext) as {
    wishList: BookType[];
    setWishList: Dispatch<SetStateAction<BookType[]>>;
  };

  const handleAddToWishList = () => {
    setWishList([...wishList, book]);

    toast.success(`${book.bookName} added to your wishlist`);
  };

  return (
    <button
      className="flex-1 rounded-xl bg-[#2f241f] px-6 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#b85c38] hover:shadow-xl"
      onClick={handleAddToWishList}
    >
      ♡ Add To Wishlist
    </button>
  );
};

export default WishListButton;
