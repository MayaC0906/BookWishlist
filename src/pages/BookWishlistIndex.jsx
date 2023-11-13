import { useEffect } from "react"
import { bookService } from "../services/book.service.local"
import { useState } from "react";
import { BookPreview } from "../cmps/BookPreview";
import { BooksWishlist } from "../cmps/BooksWishlist";


export function BookWishlistIndex() {
    const [books, setBooks] = useState(null)
    console.log(books);
    useEffect(() => {
        onLoadBooks()
    }, [])

    async function onLoadBooks() {
        try {
            const books = await bookService.query()
            setBooks(books)
        } catch (err) {
            console.log('Cannot load books', err);
        }
    }

    if (!books || !books.length) return <div>Loading...</div>
    return (
        <main>
            <section className="book-display">
                <button>{'<'}</button>
                <BookPreview />
                <button>{'>'}</button>
            </section>
            <section className="books-wishlist">
                <BooksWishlist />
            </section>
        </main>
    )
} 