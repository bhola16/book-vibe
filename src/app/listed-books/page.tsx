"use client";

import ListedBookCard from "@/components/shared/ListedBookCard";
import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/types/Type";
import { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext) as {
    readBooks: BookType[];
    wishList: BookType[];
  };

  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  // console.log(sortBy, "sort by.......");
  // console.log(readBooks, "readbooks.......");
  // console.log(wishList, "Wishlist.......");


  const sortBooks = (books:BookType[]) => {

    const sortedBooks = [...books];

    if (sortBy === "rating"){
      sortedBooks.sort((a,b) => b.rating - a.rating);
    }
    else if (sortBy === "pages"){
      sortedBooks.sort((a,b) => b.totalPages - a.totalPages);
    }
    else if (sortBy === "year"){
      sortedBooks.sort((a,b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    return sortedBooks;

  }

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishList = sortBooks(wishList);





  return (
    <div className="container mx-auto py-5">
      <h2 className="my-7 bg-amber-200 rounded-3xl py-16 font-bold text-4xl text-center text-black">
        Listed Books
      </h2>

      <div className="text-center">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          defaultValue="Pick a Runtime"
          className="select select-success"
        >
          <option disabled={true}>Sort Byd</option>
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Number of Pages</option>
          <option value={"year"}>Published Year</option>
        </select>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedReadBooks.length > 0 ? (
            <div className="space-y-5">
              {sortedReadBooks.map((book) => (
                <ListedBookCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg font-semibold">
              No read books found in Read List....
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`WishList Books (${wishList.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedWishList.length > 0 ? (
            <div className="space-y-5">
              {sortedWishList.map((book) => (
                <ListedBookCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg font-semibold">
              No books found in Wishlist....
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
