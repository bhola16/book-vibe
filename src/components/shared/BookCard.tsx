// src/components/shared/BookCard.tsx

import { BookType } from "@/types/Type";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }: { book: BookType }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-amber-100 bg-[#fffaf2] shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#e7c7a8] hover:shadow-2xl active:scale-[0.99]">
      {/* Image */}
      <div className="relative h-80 overflow-hidden bg-[#f3eadc]">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5 transition-all duration-300 group-hover:from-black/50" />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-[#fffaf2]/95 px-3 py-1 text-sm font-semibold text-[#7c4a2d] shadow-md backdrop-blur transition-all duration-300 group-hover:-translate-y-1">
          {book.category}
        </span>

        {/* Rating */}
        <span className="absolute right-4 top-4 rounded-full bg-[#3f2a20]/90 px-3 py-1 text-sm font-semibold text-amber-100 shadow-md backdrop-blur transition-all duration-300 group-hover:scale-110">
          ⭐ {book.rating}
        </span>

        {/* Book Title on Image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-xl font-bold text-white drop-shadow-lg">
            {book.bookName}
          </h2>

          <p className="mt-1 text-sm text-white/90">by {book.author}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#f4dfc8] px-3 py-1 text-xs font-medium text-[#8a5635] transition-all duration-200 hover:-translate-y-1 hover:bg-[#eac9a8] hover:shadow-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Details */}
        <div className="mt-5 grid grid-cols-2 gap-4 border-y border-amber-100 py-4">
          <div className="transition-transform duration-300 group-hover:translate-x-1">
            <p className="text-xs text-[#a68a75]">Pages</p>

            <p className="font-semibold text-[#4b3428]">{book.totalPages}</p>
          </div>

          <div className="transition-transform duration-300 group-hover:translate-x-1">
            <p className="text-xs text-[#a68a75]">Published</p>

            <p className="font-semibold text-[#4b3428]">
              {book.yearOfPublishing}
            </p>
          </div>
        </div>

        {/* View Details */}
        <Link
          href={`/books/${book.bookId}`}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#3f2a20] px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#b85c38] hover:shadow-lg active:translate-y-0"
        >
          <span>View Details</span>

          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
