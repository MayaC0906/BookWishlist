import { useEffect } from "react"
import { bookService } from "../services/book.service.local"
import { useState } from "react";
import { BookPreview } from "../cmps/BookPreview";
import { BooksWishlist } from '../cmps/BooksWishlist'


export function BookWishlistIndex() {
    const [books, setBooks] = useState(null)
    const [currBook, setCurrBook] = useState(null)
    const [myWishlistBooks, setMyWishlistBooks] = useState([]);

    useEffect(() => {
        onLoadBooks()
    }, [])

    async function onLoadBooks() {
        try {
            const books = await bookService.query()
            setBooks(books)
            setCurrBook(books[0])
            setMyWishlistBooks(books.filter(book => book.isWishlisted))
        } catch (err) {
            console.log('Cannot load books', err);
        }
    }

    async function onRemoveFromWishlist(bookId) {
        const book = books.find(book => book.id === bookId)
        book.isWishlisted = false
        try {
            await bookService.save(book)
            if (currBook.id === book.id) setCurrBook({ ...book })
            setMyWishlistBooks(books.filter(book => book.isWishlisted))
        } catch (err) {
            console.log('Cannot remove book', err)
        }
    }

    async function onToggleBokToWishlist(bookId) {
        const book = books.find(book => book.id === bookId)
        book.isWishlisted = !book.isWishlisted
        try {
            await bookService.save(book)
            setCurrBook({ ...book })
            setMyWishlistBooks(books.filter(book => book.isWishlisted))
        } catch (err) {
            console.log('Cannot change book wishlist', err)
        }
    }

    if (!books || !books.length) return <div>Loading...</div>
    return (
        <main>
            <section className="book-display">
                <button>{'<'}</button>
                <BookPreview book={currBook} onToggleBokToWishlist={onToggleBokToWishlist} />
                <button>{'>'}</button>
            </section>
            <section className="books-wishlist">
                <BooksWishlist books={books} onRemoveFromWishlist={onRemoveFromWishlist} myWishlistBooks={myWishlistBooks} />
            </section>
        </main>
    )
} 