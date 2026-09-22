import BookCard from "@/components/shared/BookCard";
import { BookType } from "@/types/Type";

const getBooks = async (): Promise<BookType[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    return res.json();
  } catch {
    throw new Error("Failed to fetch books");
    return [];
  }
};

const BooksPage = async () => {
  const booksData = await getBooks();

  return (
    <section className="bg-[#fffaf2] py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#b85c38]">
            Our Collection
          </p>

          <h1 className="text-3xl font-bold text-[#3f2a20] md:text-4xl">
            Explore All Books
          </h1>

          <p className="mt-4 leading-7 text-[#8b6f5a]">
            Discover our complete collection of books and find your next great
            read.
          </p>
        </div>

        {/* All Books */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {booksData.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksPage;
