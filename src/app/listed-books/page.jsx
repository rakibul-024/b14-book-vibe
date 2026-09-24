"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { BooksContext } from "@/app/context/BooksContext";

const ListedBookCard = ({ book, onDelete }) => (
  <article className="flex flex-col gap-5 rounded-xl border border-[#e5e5e5] bg-white p-4 sm:flex-row sm:items-center">
    <div className="flex h-40 w-full shrink-0 items-center justify-center rounded-lg bg-[#f3f3f3] sm:h-32 sm:w-32">
      <Image
        src={book.image}
        alt={book.bookName}
        width={110}
        height={145}
        className="h-28 w-auto object-contain"
      />
    </div>

    <div className="min-w-0 flex-1">
      <h2 className="font-serif text-lg font-bold text-[#222]">{book.bookName}</h2>
      <p className="mt-1 text-xs text-[#555]">By : {book.author}</p>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[#555]">
        <span className="font-semibold text-[#222]">Tag:</span>
        {book.tags?.map((tag) => (
          <span key={tag} className="rounded-full bg-[#e8f8e9] px-3 py-1 text-[#23be0a]">
            #{tag}
          </span>
        ))}
        <span className="ml-1">Year of Publishing: {book.yearOfPublishing}</span>
      </div>

      <div className="mt-3 flex flex-wrap gap-4 border-b border-[#ededed] pb-3 text-xs text-[#555]">
        <span>Publisher: {book.publisher}</span>
        <span>Page: {book.totalPages}</span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[#e7f1ff] px-3 py-1 text-xs text-[#4592e8]">
          Category: {book.category}
        </span>
        <span className="rounded-full bg-[#fff3dc] px-3 py-1 text-xs text-[#e8a52f]">
          Rating: {book.rating}
        </span>
        <Link
          href={`/books/${book.bookId}`}
          className="rounded-full bg-[#23be0a] px-4 py-1 text-xs font-semibold text-white"
        >
          View Details
        </Link>
        <button
          type="button"
          onClick={() => onDelete(book)}
          className="rounded-full bg-[#ffe8e8] px-4 py-1 text-xs font-semibold text-[#dc2626]"
        >
          Delete
        </button>
      </div>
    </div>
  </article>
);

const ListedBooks = () => {
  const { readBooks, setReadBooks, wishlistBooks, setWishlistBooks } =
    useContext(BooksContext);
  const [activeTab, setActiveTab] = useState("read");
  const [sortBy, setSortBy] = useState("default");
  const books = activeTab === "read" ? readBooks : wishlistBooks;

  const sortedBooks = useMemo(() => {
    const result = [...books];
    if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);
    if (sortBy === "pages") result.sort((a, b) => b.totalPages - a.totalPages);
    if (sortBy === "year") {
      result.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return result;
  }, [books, sortBy]);

  const handleDelete = (book) => {
    if (activeTab === "read") {
      setReadBooks((currentBooks) =>
        currentBooks.filter((savedBook) => savedBook.bookId !== book.bookId)
      );
    } else {
      setWishlistBooks((currentBooks) =>
        currentBooks.filter((savedBook) => savedBook.bookId !== book.bookId)
      );
    }
    toast.success("Book deleted successfully.");
  };

  return (
    <main className="min-h-screen bg-white px-4 py-8 md:px-8">
      <div className="mx-auto max-w-[1170px]">
        <h1 className="rounded-xl bg-[#f1f1f1] py-5 text-center font-serif text-2xl font-bold text-[#222]">
          Books
        </h1>

        <div className="mt-6 flex justify-end">
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-lg bg-[#23be0a] px-4 py-2 text-sm font-semibold text-white outline-none"
            aria-label="Sort books"
          >
            <option value="default">Sort By</option>
            <option value="rating">Rating</option>
            <option value="pages">Number of pages</option>
            <option value="year">Year of publishing</option>
          </select>
        </div>

        <div className="mt-5 flex gap-1 border-b border-[#e5e5e5]">
          <button
            type="button"
            onClick={() => setActiveTab("read")}
            className={`px-4 py-3 text-sm ${
              activeTab === "read"
                ? "border border-b-white border-[#e5e5e5] bg-white font-semibold text-[#222]"
                : "text-[#888]"
            }`}
          >
            Read Books
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("wishlist")}
            className={`px-4 py-3 text-sm ${
              activeTab === "wishlist"
                ? "border border-b-white border-[#e5e5e5] bg-white font-semibold text-[#222]"
                : "text-[#888]"
            }`}
          >
            Wishlist Books
          </button>
        </div>

        <div className="mt-3 space-y-4">
          {sortedBooks.length > 0 ? (
            sortedBooks.map((book) => (
              <ListedBookCard key={book.bookId} book={book} onDelete={handleDelete} />
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-[#d8d8d8] py-16 text-center text-[#777]">
              No books added to{" "}
              {activeTab === "read" ? "Read Books" : "Wishlist Books"} yet.
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ListedBooks;
