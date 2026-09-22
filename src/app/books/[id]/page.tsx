import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishLisButton";
import { BookType } from "@/types/Type";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const getBooks = async (): Promise<BookType[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch books");
    return [];
  }
};

const BookDetailsPage = async ({ params }: Props) => {
  const { id } = await params;

  const books = await getBooks();

  const book = books.find((item) => item.bookId === Number(id));

  if (!book) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-[#faf7f2] px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b85c38]">
            404
          </p>

          <h1 className="mt-3 text-4xl font-bold text-[#2f241f]">
            Book Not Found
          </h1>

          <p className="mt-3 text-[#806f64]">
            We could not find a book with ID {id}.
          </p>

          <Link
            href="/books"
            className="mt-7 inline-flex rounded-xl bg-[#2f241f] px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#b85c38]"
          >
            ← Back to Books
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* Header */}
      <section className="border-b border-[#eadfd5] bg-white">
        <div className="container mx-auto px-4 py-5">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#806f64] transition hover:text-[#b85c38]"
          >
            ← Back to Collection
          </Link>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-[2rem] border border-[#eadfd5] bg-white shadow-[0_20px_60px_rgba(63,42,32,0.08)]">
            <div className="grid lg:grid-cols-2">
              {/* ================= IMAGE ================= */}
              <div className="relative min-h-[550px] overflow-hidden bg-[#f3e5d5]">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  priority
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/10" />

                {/* Category */}
                <div className="absolute left-6 top-6 z-10">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#3f2a20] shadow-lg backdrop-blur">
                    {book.category}
                  </span>
                </div>

                {/* Book ID */}
                <div className="absolute right-6 top-6 z-10">
                  <span className="rounded-full bg-[#2f241f]/80 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                    Book #{book.bookId}
                  </span>
                </div>

                {/* Bottom Image Content */}
                <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-white/80">Author</p>

                    <p className="mt-1 text-xl font-bold text-white">
                      {book.author}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="rounded-2xl bg-white/90 px-5 py-3 shadow-xl backdrop-blur">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#9a8678]">
                      Rating
                    </p>

                    <p className="mt-1 text-lg font-bold text-[#2f241f]">
                      ⭐ {book.rating}
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-8 md:p-12 lg:p-14">
                {/* Small Heading */}
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b85c38]">
                  Book Details
                </p>

                {/* Title */}
                <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#2f241f] md:text-5xl">
                  {book.bookName}
                </h1>

                {/* Author */}
                <p className="mt-4 text-lg text-[#806f64]">
                  Written by{" "}
                  <span className="font-bold text-[#b85c38]">
                    {book.author}
                  </span>
                </p>

                {/* Divider */}
                <div className="my-8 h-px bg-[#eadfd5]" />

                {/* About */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b85c38]">
                    About this book
                  </p>

                  <p className="mt-4 text-base leading-8 text-[#6f625a]">
                    {book.review}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b85c38]">
                    Genres & Tags
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-[#eadfd5] bg-[#faf7f2] px-4 py-2 text-sm font-medium text-[#80634f] transition hover:border-[#d7b79d] hover:bg-[#f4e2d0]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Information */}
                <div className="mt-9 grid grid-cols-2 gap-5 border-y border-[#eadfd5] py-7 sm:grid-cols-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#a18f83]">
                      Pages
                    </p>

                    <p className="mt-2 text-lg font-bold text-[#2f241f]">
                      {book.totalPages}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#a18f83]">
                      Published
                    </p>

                    <p className="mt-2 text-lg font-bold text-[#2f241f]">
                      {book.yearOfPublishing}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#a18f83]">
                      Publisher
                    </p>

                    <p className="mt-2 text-sm font-bold leading-6 text-[#2f241f]">
                      {book.publisher}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#a18f83]">
                      Rating
                    </p>

                    <p className="mt-2 text-lg font-bold text-[#2f241f]">
                      {book.rating} / 5
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <ReadButton book={book}></ReadButton>
                  <WishListButton book={book}></WishListButton>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-2xl font-semibold leading-relaxed text-[#3f2a20] md:text-3xl">
              “Every book opens a door to a different world.”
            </p>

            <p className="mt-3 text-sm text-[#9a8678]">
              Find your next story and start reading.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookDetailsPage;
