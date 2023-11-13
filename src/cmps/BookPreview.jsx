import { useEffect, useState } from "react"
import { Stars } from "./Stars"

export function BookPreview({ book, onToggleBokToWishlist }) {
    const bookStars = Math.round(book.rating)
    console.log(book);

    useEffect (()=>{
        setBookStars(Math.round(book.rating))
    },[book])
    
    return <section className="book-Preview">
        <header>
            <h2>{book.title}</h2>
            <input type="checkbox" checked={book.isWishlisted} onClick={() => onToggleBokToWishlist(book.id)} />
        </header>
        <hr />
        <section className="book-info">
            <h3>{book.author}</h3>
            <p>{book.description}</p>
            <div className="rate">
                <h4>Rating:</h4>
                <Stars bookStars={bookStars} />
            </div>
            <div className="price">
                <h4>Price:</h4>
                <span>$ {book.price}</span>
            </div>
        </section>
    </section>
}
