import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BooksCard = ({ book }) => {
  if (!book) return null;

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg">
      <div>
        {/* Top Image Container */}
        <div className="mb-6 flex h-60 w-full items-center justify-center rounded-2xl bg-gray-100/80 py-6">
         
            <Image className=" rounded-2xl h-44 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105" src={book.image} alt={book.bookName} width={400} height={600} />
         
            
         
        </div>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {book.tags?.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-[#23BE0A]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book Title & Author */}
        <h3 className="mb-2 font-serif text-xl font-bold text-gray-900 line-clamp-1">
          {book.bookName}
        </h3>
        <p className="mb-4 text-sm font-medium text-gray-600">
          By : {book.author}
        </p>
      </div>

      <div>
        {/* Border Line */}
        <div className="my-4 border-t border-dashed border-gray-200" />

        {/* Category & Rating */}
        <div className="mb-5 flex items-center justify-between text-sm font-medium text-gray-600">
          <span>{book.category}</span>
          <div className="flex items-center gap-1.5">
            <span>{book.rating}</span>
            <svg
              className="h-4 w-4 fill-amber-400"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        {/* View Details Button */}
    
<Link
  href={`/books/${book.bookId}`}
  className="block w-full rounded-xl bg-[#35d26d] py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#2fc563]"
>
  View Details
</Link> 
      
      </div>
    </div>
  );
};

export default BooksCard;