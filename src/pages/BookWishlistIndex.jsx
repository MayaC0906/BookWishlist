import { useEffect } from "react"
import { bookService } from "../services/book.service.local"
import { useState } from "react";
import { BookPreview } from "../cmps/BookPreview";
import { BooksWishlist } from '../cmps/BooksWishlist'


export function BookWishlistIndex() {
    const [books, setBooks] = useState(null)
    const [currBook, setCurrBook] = useState(null) 

    useEffect(() => {
        onLoadBooks()
    }, [])

    async function onLoadBooks() {
        try {
            const books = await bookService.query()
            setBooks(books)
            setCurrBook(books[0])
        } catch (err) {
            console.log('Cannot load books', err);
        }
    }

    if (!books || !books.length) return <div>Loading...</div>
    return (
        <main>
            <section className="book-display">
                <button>{'<'}</button>
                <BookPreview book={currBook}/>
                <button>{'>'}</button>
            </section>
            <section className="books-wishlist">
                <BooksWishlist books={books} />
            </section>
        </main>
    )
} 