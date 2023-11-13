import { useEffect, useState } from "react"
import { svgs } from "./Svgs"

export function BooksWishlist({ books }) {
    const [myWishlistBooks, setMyWishlistBooks] = useState([])

    useEffect(() => {
        const wishlistBooks = books.filter(book => book.isWishlisted)
        setMyWishlistBooks(wishlistBooks)
    }, [])

    console.log(myWishlistBooks)

    return (
        <>
            {myWishlistBooks.map(myWishlistBook =>
                <section className="my-wishlist">
                    <div className="color" style={{ backgroundColor: 'orange' }}></div >
                    <h2>{myWishlistBook.title}</h2>
                    <button>{svgs.close}</button>
                </section >
            )
            }
        </>
    )

}