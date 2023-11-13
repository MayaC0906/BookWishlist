import { svgs } from "./Svgs"

export function BooksWishlist({ onRemoveFromWishlist, myWishlistBooks }) {
    console.log(myWishlistBooks);

    return (
        <>
            {myWishlistBooks.map(myWishlistBook =>
                <section className="my-wishlist" key={myWishlistBook.id}>
                    <div className="color" style={{ backgroundColor: 'orange' }}></div >
                    <div className="book">
                    <h2>{myWishlistBook.title}</h2>
                    <button onClick={() => onRemoveFromWishlist(myWishlistBook.id)}>{svgs.close}</button>
                    </div>
                </section >
            )
            }
        </>
    )

}