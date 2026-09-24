'use client';
import { BooksContext } from "@/app/context/BooksContext";
import React from "react";
import { useContext } from "react";

const ReadButton = ({ book }) => {
    const {readBooks, setReadBooks} = useContext(BooksContext);


    const handleReadBook = () => {
        console.log("read book btn triggered", book);

        setReadBooks([...readBooks, book]);
    };
    return (
        <button className="btn btn-primary flex-1" onClick={() => handleReadBook()}>
            Read
        </button>
    );
};

export default ReadButton;