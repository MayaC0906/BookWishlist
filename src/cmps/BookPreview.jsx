import { Stars } from "./Stars"
import { svgs } from "./Svgs"

export function BookPreview({ book }) {
    const bookStars = Math.round(book.rating)

    return <section className="book-Preview">
        <header>
            <h2>{book.title}</h2>
            <input type="checkbox" checked={book.isWishlisted} />
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
