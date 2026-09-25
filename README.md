# Book Vibe

Book Vibe is a book discovery application built with Next.js. Users can browse books, open a book details page, add books to their Read Books or Wishlist Books list, sort saved books, and remove books with toast notifications.

## Features

- Responsive landing page with a hero banner
- Book catalogue with book cards
- Book details page for each book
- Add books to Read Books
- Add books to Wishlist Books
- Prevent duplicate books from being added
- Read Books and Wishlist Books tabs
- Sort saved books by:
  - Rating
  - Number of pages
  - Year of publishing
- Delete books from saved lists
- React Toastify notifications for add and delete actions
- Active navigation state for the current route

## Technologies

- Next.js
- React
- Tailwind CSS
- DaisyUI
- React Toastify
- Recharts

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Create a production build

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

## Application Routes

| Route | Description |
| --- | --- |
| `/` | Landing page with the banner |
| `/books` | Complete book catalogue |
| `/books/[bookId]` | Details for a specific book |
| `/listed-books` | Read Books and Wishlist Books |
| `/pages-to-read` | Pages-to-read chart |

## Project Structure

```text
src/
└── app/
    ├── books/
    │   ├── [bookId]/
    │   │   └── page.jsx
    │   └── page.jsx
    ├── components/
    │   ├── bookDetails/
    │   │   ├── ReadButton.jsx
    │   │   └── WishListButton.jsx
    │   └── BooksCard.jsx
    ├── context/
    │   └── BooksContext.jsx
    ├── listed-books/
    │   └── page.jsx
    ├── pages-to-read/
    │   └── page.jsx
    ├── Banner/
    │   └── page.jsx
    ├── Navber/
    │   └── page.jsx
    ├── layout.js
    ├── page.js
    └── globals.css

public/
├── assets/
│   └── banner-img.png
└── booksData.json
```

## Read and Wishlist Flow

The application stores Read Books and Wishlist Books in `BooksContext`.

- Clicking **Read** adds a book to Read Books.
- Clicking **Wishlist** adds a book to Wishlist Books.
- Duplicate books are not added again.
- Books can be deleted from the Listed Books page.
- Add and delete actions display React Toastify notifications.

## Book Data

Book information is stored in:

```text
public/booksData.json
```

Each book contains information such as:

- Book name
- Author
- Cover image
- Review
- Total pages
- Rating
- Category
- Tags
- Publisher
- Publication year

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint
```
