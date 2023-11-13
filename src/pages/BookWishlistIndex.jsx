import { useEffect } from "react"
import { bookService } from "../services/book.service.local"
import { useState } from "react";
import { BookPreview } from "../cmps/BookPreview";
import { BooksWishlist } from "../cmps/BooksWishlist";
import { svgs } from "../cmps/Svgs";
import { SortWishlistBooks } from "../cmps/SortWishlistBooks";


export function BookWishlistIndex() {
    const [books, setBooks] = useState(null)
    const [currBook, setCurrBook] = useState(null)
    const [bookPlace, setBookPlace] = useState('first')
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

    function onChangeCurrBook(direction) {
        if (!books || !books.length) return
        if (direction === 'next') {
            let currIndex = books.findIndex(book => book.id === currBook.id)
            let newIndex = currIndex + 1
            setCurrBook(books[newIndex])
            if (newIndex === books.length - 1) setBookPlace('last')
            else setBookPlace('')
        }
        if (direction === 'previous') {
            let currIndex = books.findIndex(book => book.id === currBook.id)
            let newIndex = currIndex - 1
            setCurrBook(books[newIndex])
            if (newIndex === 0) setBookPlace('first')
            else setBookPlace('')
        }
    }

    function getArrowClass(direction) {
        if (books.length <= 1) return 'inactive'
        if (direction === 'left') {
            if (bookPlace === 'first') {
                return 'inactive'
            } else return ''
        }
        if (direction === 'right') {
            if (bookPlace === 'last') {
                return 'inactive'
            } else return ''
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
            <section className="main-layout">
            <section className="book-display">
                <button className={getArrowClass('left')} onClick={() => { onChangeCurrBook('previous') }}>{svgs.leftArrow}</button>
                <BookPreview book={currBook} onToggleBokToWishlist={onToggleBokToWishlist} />
                <button className={getArrowClass('right')} onClick={() => { onChangeCurrBook('next') }}>{svgs.rightArrow}</button>
            </section >
            <section className="books-wishlist">
                <SortWishlistBooks sortByTitle={sortByTitle} sortByNumber={sortByNumber} />
                <BooksWishlist books={books} onRemoveFromWishlist={onRemoveFromWishlist} myWishlistBooks={myWishlistBooks} />
            </section>
            </section>
        </main >
    )
} 