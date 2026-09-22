// src/components/shared/ListedBookCard.tsx

import { BookType } from "@/types/Type";
import Image from "next/image";
import Link from "next/link";

const ListedBookCard = ({ book }: { book: BookType }) => {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-[#eadfd5] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:flex-row">
      {/* Book Image */}
      <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-xl bg-[#f3e5d5] md:h-52 md:w-36">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-contain p-3"
          sizes="144px"
        />
      </div>

      {/* Book Information */}
      <div className="flex flex-1 flex-col">
        {/* Category */}
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#f4e2d0] px-3 py-1 text-xs font-bold uppercase text-[#9a5735]">
            {book.category}
          </span>

          <span className="text-sm font-semibold text-[#8b6f5a]">
            ⭐ {book.rating}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-bold text-[#3f2a20]">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-[#806f64]">
          by <span className="font-semibold text-[#b85c38]">{book.author}</span>
        </p>

        {/* Description */}
        <p className="mt-4 line-clamp-2 leading-7 text-[#6f625a]">
          {book.review}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#faf0e6] px-3 py-1 text-xs font-medium text-[#8a5635]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom Information */}
        <div className="mt-5 flex flex-wrap items-center gap-5 border-t border-[#eadfd5] pt-4 text-sm">
          <div>
            <span className="text-[#a18f83]">Pages:</span>{" "}
            <span className="font-semibold text-[#3f2a20]">
              {book.totalPages}
            </span>
          </div>

          <div>
            <span className="text-[#a18f83]">Published:</span>{" "}
            <span className="font-semibold text-[#3f2a20]">
              {book.yearOfPublishing}
            </span>
          </div>

          {/* Details Button */}
          <Link
            href={`/books/${book.bookId}`}
            className="ml-auto rounded-lg bg-[#3f2a20] px-10 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-[#b85c38]"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
