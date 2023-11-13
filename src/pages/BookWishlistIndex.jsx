import { useEffect } from "react"
import { bookService } from "../services/book.service.local"
import { useState } from "react";
import { BookPreview } from "../cmps/BookPreview";
import { BooksWishlist } from '../cmps/BooksWishlist'
import { SortWishlistBooks } from "../cmps/SortWishlistBooks";


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
                (books.filter(book => book.isWishlisted))
        } catch (err) {
            console.log('Cannot change book wishlist', err)
        }
    }

    function sortByTitle() {
        const sortedBooks = [...myWishlistBooks]
        sortedBooks.sort((a, b) => {
            const titleA = a.title.toLowerCase()
            const titleB = b.title.toLowerCase()
            if (titleA < titleB) return -1
            if (titleA > titleB) return 1
            return 0
        })
        setMyWishlistBooks(sortedBooks)
    }

    function sortByNumber(type) {
        console.log(type);
        const sortedBooks = [...myWishlistBooks]
        sortedBooks.sort((a, b) => {
            if (a[type] < b[type]) return -1
            if (a[type] > b[type]) return 1
            return 0
        })
        setMyWishlistBooks(sortedBooks)
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
                <SortWishlistBooks sortByTitle={sortByTitle} sortByNumber={sortByNumber} />
                <BooksWishlist books={books} onRemoveFromWishlist={onRemoveFromWishlist} myWishlistBooks={myWishlistBooks} />
            </section>
        </main>
    )
} 