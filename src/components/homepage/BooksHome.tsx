import { BookType } from "@/types/Type";
import BookCard from "../shared/BookCard";

const getBooks = async (): Promise<BookType[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/bookData.json`,
    );
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch books");
    return [];
  }
};

const BooksHome = async () => {
  const booksData = await getBooks();

  return (
    <section className="bg-[#fffaf2] py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#b85c38]">
            Explore Our Famous books Collection
          </p>

          <h2 className="text-3xl font-bold text-[#3f2a20] md:text-4xl">
            Discover Your Next Favorite Book
          </h2>

          <p className="mt-4 leading-7 text-[#8b6f5a]">
            Browse classics, adventures and unforgettable stories waiting to
            become your next favorite read.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {booksData.slice(0, 5).map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksHome;
