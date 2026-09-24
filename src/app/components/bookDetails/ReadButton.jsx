'use client';
import { BooksContext } from "@/app/context/BooksContext";
import React from "react";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }) => {
    const {readBooks, setReadBooks} = useContext(BooksContext);


    const handleReadBook = () => {
        if (readBooks.some((savedBook) => savedBook.bookId === book.bookId)) {
            toast.info("This book is already in Read Books.");
            return;
        }

        setReadBooks((currentBooks) => [...currentBooks, book]);
        toast.success("Book added to Read Books.");
    };
    return (
        <button className="btn btn-primary flex-1" onClick={handleReadBook}>
            Read
        </button>
    );
};

export default ReadButton;