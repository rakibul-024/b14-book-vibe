
'use client';
import React from 'react';
import { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';

const ReadBooks = () => {
    const {readBooks} = useContext(BooksContext);
    // console.log("readBooks", readBooks);


    return (
        <div>
            <h2>Read Books</h2>
        </div>
    );
};

export default ReadBooks;