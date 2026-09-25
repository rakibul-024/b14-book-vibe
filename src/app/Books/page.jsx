import React from 'react';
import BooksCard from '@/app/components/BooksCard';
import booksData from '../../../public/booksData.json';

const Page = async () => {
  return (
    <main className="min-h-screen bg-white py-12">
      {/* Strict Container Width & Centering */}
      <div className="w-full max-w-[1170px] mx-auto px-4 md:px-6">
        <h1 className="mb-9 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Books
        </h1>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {booksData.map((book) => (
            <BooksCard key={book.bookId || book.id} book={book} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;