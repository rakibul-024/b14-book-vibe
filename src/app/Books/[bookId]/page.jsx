import ReadButton from "@/app/components/bookDetails/ReadButton";
import WishListButton from "@/app/components/bookDetails/WishListButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BooksDetailsPage = async ({ params }) => {
  const { bookId } = await params;

  const res = await fetch("http://localhost:3000/booksData.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books data");
  }

  const data = await res.json();

  const book = data.find(
    (book) => String(book.bookId) === String(bookId)
  );

  if (!book) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Book Not Found
          </h2>

          <Link
            href="/books"
            className="mt-5 inline-block rounded-lg bg-[#35d26d] px-6 py-3 font-semibold text-white"
          >
            Back to Books
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-8 md:px-6 lg:py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

        {/* Left Side - Book Image */}
        <div className="flex min-h-[500px] items-center justify-center rounded-2xl bg-gray-100/70 p-8 md:min-h-[560px] md:p-12">
          <Image
            src={book.image}
            alt={book.bookName}
            width={400}
            height={560}
            priority
            className="max-h-[460px] w-auto rounded-lg object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right Side - Book Details */}
        <div className="flex flex-col justify-center">

          {/* Title */}
          <h1 className="font-serif text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="mt-3 text-base font-medium text-gray-600">
            By : <span className="text-gray-800">{book.author}</span>
          </p>

          {/* Divider */}
          <div className="my-4 border-t border-gray-200" />

          {/* Category */}
          <p className="text-base font-medium text-gray-600">
            {book.category}
          </p>

          {/* Divider */}
          <div className="my-4 border-t border-gray-200" />

          {/* Review */}
          <div>
            <p className="text-sm leading-relaxed text-gray-500">
              <span className="font-bold text-gray-900">Review : </span>
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold text-gray-900">Tag</span>
            {book.tags?.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold text-[#23BE0A]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200" />

          {/* Book Information */}
          <div className="space-y-3 text-sm">
            <div className="grid grid-cols-[160px_1fr]">
              <span className="text-gray-500">Number of Pages:</span>
              <span className="font-bold text-gray-900">{book.totalPages}</span>
            </div>

            <div className="grid grid-cols-[160px_1fr]">
              <span className="text-gray-500">Publisher:</span>
              <span className="font-bold text-gray-900">{book.publisher}</span>
            </div>

            <div className="grid grid-cols-[160px_1fr]">
              <span className="text-gray-500">Year of Publishing:</span>
              <span className="font-bold text-gray-900">{book.yearOfPublishing}</span>
            </div>

            <div className="grid grid-cols-[160px_1fr]">
              <span className="text-gray-500">Rating:</span>
              <span className="font-bold text-gray-900">{book.rating}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <ReadButton book={book} />
            <WishListButton book={book} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BooksDetailsPage;