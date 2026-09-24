'use client';

import React, { createContext , useState } from "react";

const BooksContext = createContext();

const BooksProvider = ({children}) => {
const[readBooks, setReadBooks] = useState([]);
const [wishlistBooks, setWishlistBooks] = useState([]);

const sharedData = {
    readBooks,
    setReadBooks,
    wishlistBooks,
    setWishlistBooks,
};

    return (
        <BooksContext.Provider value={{sharedData}}>
            {children}
        </BooksContext.Provider>
    );
};

export { BooksContext };
export default BooksProvider;