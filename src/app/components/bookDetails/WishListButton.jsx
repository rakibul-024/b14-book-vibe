'use client';
import { BooksContext } from "@/app/context/BooksContext";
import React from "react";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }) => {
    const {wishlistBooks, setWishlistBooks} = useContext(BooksContext);


    const handleWishListBook = () => {
        if (wishlistBooks.some((savedBook) => savedBook.bookId === book.bookId)) {
            toast.info("This book is already in Wishlist Books.");
            return;
        }

        setWishlistBooks((currentBooks) => [...currentBooks, book]);
        toast.success("Book added to Wishlist Books.");
    };
    return (
        <button className="btn btn-info flex-1" onClick={handleWishListBook}>
            Wishlist
        </button>
    );
};

export default WishListButton;