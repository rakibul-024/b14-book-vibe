'use client';

import React, { createContext, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BooksContext = createContext(null);

const BooksProvider = ({ children }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  return (
    <BooksContext.Provider
      value={{
        readBooks,
        setReadBooks,
        wishlistBooks,
        setWishlistBooks,
      }}
    >
      {children}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </BooksContext.Provider>
  );
};

export default BooksProvider;